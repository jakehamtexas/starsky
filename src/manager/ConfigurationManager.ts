import Configuration from '../contract/Configuration';
import { FileSystemRA } from '../resource';

class ConfigurationManager {
  public async GetConfiguration(): Promise<Configuration> {
    const buffer = await FileSystemRA.ReadConfigFile();
    return JSON.parse(buffer.toString()) as Configuration;
  }
  public async HasConfiguration(): Promise<boolean> {
    return FileSystemRA.HasConfigFile();
  }
  public async WriteConfigurationFile(
    configuration: Configuration
  ): Promise<void> {
    const data = JSON.stringify(configuration);
    await FileSystemRA.WriteConfigFile(data);
  }
}

export default new ConfigurationManager();
