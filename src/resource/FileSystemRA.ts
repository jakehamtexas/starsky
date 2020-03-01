import { homedir as GetHomeDir } from 'os';
import { readFile, fileExists, writeFile } from '../utils';
const homedir = GetHomeDir();
const configurationFileName = 'starsky-config.json';
const filePath = `${homedir}\\${configurationFileName}`;
class FileSystemRA {
  public async HasConfigFile(): Promise<boolean> {
    return await fileExists(filePath);
  }

  public async ReadConfigFile(): Promise<Buffer> {
    return await readFile(filePath);
  }

  public async WriteConfigFile(data: string): Promise<void> {
    await writeFile(filePath, data);
  }
}

export default new FileSystemRA();
