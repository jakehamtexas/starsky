import { RepoRA, FileSystemRA, TokenRA } from '../resource';
import { StarredRepo, Configuration } from '../contract';
import { FilePathEngine } from '../engine';
import { getFromBufferOrDefault, mapFromJson } from '../utils';
class StarredRepoManager {
  public async ListStarred(): Promise<Array<StarredRepo>> {
    const queryUsername = await this._getQueryUsername();
    const token = await this._getToken();
    const jsonArray = await RepoRA.ListStarredJson(queryUsername, token);
    return mapFromJson(jsonArray);
  }

  private async _getQueryUsername(): Promise<string> {
    const configFilePath = FilePathEngine.GetConfigFilePath();
    const configBuffer = await FileSystemRA.ReadFile(configFilePath);
    const { queryUsername } = getFromBufferOrDefault<Configuration>(
      configBuffer
    );
    return queryUsername;
  }

  private async _getToken(): Promise<string> {
    const authFilePath = FilePathEngine.GetAuthFilePath();
    const hasDir = FileSystemRA.HasFile(authFilePath);
    if (!hasDir) {
      await FileSystemRA.CreateDirForFile(authFilePath);
    }
    return TokenRA.GetToken();
  }
}

export default new StarredRepoManager();
