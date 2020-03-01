import * as FileSystem from 'fs';
const readFile = (filePath: string): Promise<Buffer> =>
  new Promise((resolve, reject) =>
    FileSystem.readFile(filePath, (error, buffer) => {
      if (error) reject(error);
      resolve(buffer);
    })
  );
export default readFile;
