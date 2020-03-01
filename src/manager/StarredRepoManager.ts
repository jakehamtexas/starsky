import { RepoRA } from '../resource';
import { StarredRepo } from '../contract';
import { mapFromJson } from '../engine';
class StarredRepoManager {
  constructor() {}
  /**
   * ListStarred
   */
  public async ListStarred(username: string): Promise<Array<StarredRepo>> {
    const jsonArray = await RepoRA.ListStarredJson(username);
    return mapFromJson(jsonArray);
  }
}

export default new StarredRepoManager();
