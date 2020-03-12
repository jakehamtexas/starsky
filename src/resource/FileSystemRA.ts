import { existsSync, access, readFile, writeFile, mkdir } from 'fs';
import { dirname } from 'path';
class FileSystemRA {
  public async HasFile(filePath: string): Promise<boolean> {
    return (
      existsSync(filePath) &&
      (await new Promise(resolve => access(filePath, error => resolve(!error))))
    );
  }

  public async ReadFile(filePath: string): Promise<Buffer> {
    return new Promise((resolve, reject) =>
      readFile(filePath, (error, buffer) => {
        if (error) reject(error);
        resolve(buffer);
      })
    );
  }

  public async WriteFile(filePath: string, data: string): Promise<void> {
    return new Promise((resolve, reject) =>
      writeFile(filePath, data, error => {
        if (error) reject(error);
        resolve();
      })
    );
  }

  public async CreateDirForFile(filePath: string): Promise<void> {
    return new Promise(resolve => {
      const dirName = dirname(filePath);
      mkdir(dirName, () => resolve());
    });
  }
}

export default new FileSystemRA();
