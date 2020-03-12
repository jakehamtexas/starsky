import { FileSystemRA } from '../resource';
import { FilePathEngine, AuthServerEngine } from '../engine';
import { getFromBufferOrDefault } from '../utils';
import { Authentication } from '../contract';

class TokenManager {
  private authFilePath: string;
  constructor() {
    this.authFilePath = FilePathEngine.GetAuthFilePath();
  }
  public async HasToken(): Promise<boolean> {
    const hasFile = await FileSystemRA.HasFile(this.authFilePath);
    if (!hasFile) return false;
    const authBuffer = await FileSystemRA.ReadFile(this.authFilePath);
    const { token } = getFromBufferOrDefault<Authentication>(authBuffer);
    return !!token;
  }
  public async SetupToken(): Promise<void> {
    const token = await AuthServerEngine.InitiateAuthServerWorkflowAndGetToken();
    await this._writeToken(token);
  }
  private async _writeToken(token: string): Promise<void> {
    const authentication: Authentication = {
      token
    };
    const data = JSON.stringify(authentication);
    return FileSystemRA.WriteFile(this.authFilePath, data);
  }
}

export default new TokenManager();
