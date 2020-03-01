import axios from 'axios';

const USERNAME = '{userName}';
const ENDPOINT = `https://api.github.com/users/${USERNAME}/starred`;
class RepoRA {
  /**
   * ListStarredJson
   */
  public async ListStarredJson(username: string): Promise<any> {
    const endpoint = ENDPOINT.replace(USERNAME, username);
    const { data } = await axios.get(endpoint);
    return data;
  }
}

export default new RepoRA();
