import { repoPost } from '../utils';

class RepoRA {
  /**
   * ListStarredJson
   */
  public async ListStarredJson(
    username: string,
    token: string
  ): Promise<Array<Object>> {
    const endpoint = `https://api.github.com/users/${username}/starred`;
    try {
      const response = await repoPost(endpoint, token);
      const {
        headers: { link },
        data
      } = response;
      if (link) {
        const links: Array<string> = link.split(',');
        const last = links.find(link => link.includes('rel="last"'));
        const urlPart = last.split(';')[0].replace(/[<>]/, '');
        const lastNumber = parseInt(urlPart.split('=')[1]);
        const requestUrls = new Array(lastNumber)
          .fill(null)
          .map((_, index) => urlPart.replace(/page.*/, `page=${index + 1}`))
          .slice(1);
        const responses = await Promise.all(
          requestUrls.map(url => repoPost(url, token))
        );
        return [data].concat(responses.map(({ data }) => data));
      }
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

export default new RepoRA();
