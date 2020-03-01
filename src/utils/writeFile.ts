import * as FileSystem from 'fs';
const writeFile = (filePath: string, data: string): Promise<void> =>
  new Promise((resolve, reject) =>
    FileSystem.writeFile(filePath, data, error => {
      if (error) reject(error);
      resolve();
    })
  );

export default writeFile;
