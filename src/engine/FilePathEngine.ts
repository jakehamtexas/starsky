import { homedir as getHomeDirName } from 'os';
import { join as joinPath } from 'path';

class FilePathEngine {
  private starskyDir: string;
  constructor() {
    const homeDirName = getHomeDirName();
    const starskyDirName = '/.starsky';
    this.starskyDir = joinPath(homeDirName, starskyDirName);
  }
  public GetAuthFilePath(): string {
    return joinPath(this.starskyDir, '/auth.json');
  }
  public GetConfigFilePath(): string {
    return joinPath(this.starskyDir, '/config.json');
  }
}

export default new FilePathEngine();
