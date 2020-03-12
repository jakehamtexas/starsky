import { Configuration } from '../contract';
import { FileSystemRA } from '../resource';
import { FilePathEngine } from '../engine';
import { getFromBufferOrDefault } from '../utils';

class ConfigurationManager {
  public async GetConfiguration(): Promise<Configuration> {
    return this._getExistingConfiguration();
  }
  public async HasConfiguration(): Promise<boolean> {
    const configFilePath = FilePathEngine.GetConfigFilePath();
    return FileSystemRA.HasFile(configFilePath);
  }
  public async SetQueryUsername(queryUsername: string): Promise<void> {
    const existingConfiguration = await this._getExistingConfiguration();
    const configuration: Configuration = {
      ...existingConfiguration,
      queryUsername
    };
    await this._writeConfiguration(configuration);
  }
  public async SetAuthCredentials(username: string, password: string) {
    const existingConfiguration = await this._getExistingConfiguration();
    const configuration: Configuration = {
      ...existingConfiguration,
      credentials: {
        username,
        password
      }
    };
    await this._writeConfiguration(configuration);
  }

  private async _getExistingConfiguration(): Promise<Configuration> {
    const configFilePath = FilePathEngine.GetConfigFilePath();
    const hasFile = await FileSystemRA.HasFile(configFilePath);
    if (hasFile) {
      const configBuffer = await FileSystemRA.ReadFile(configFilePath);
      return getFromBufferOrDefault<Configuration>(configBuffer);
    }
    return {} as Configuration;
  }

  private async _writeConfiguration(configuration: Configuration) {
    const authFilePath = FilePathEngine.GetAuthFilePath();
    const data = JSON.stringify(configuration);
    await FileSystemRA.WriteFile(authFilePath, data);
  }
}

export default new ConfigurationManager();
