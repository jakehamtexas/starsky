import { access } from 'fs';
const fileExists = (filePath: string): Promise<boolean> =>
  new Promise(resolve => access(filePath, error => resolve(!error)));

export default fileExists;
