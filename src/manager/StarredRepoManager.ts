import { RepoRA } from '../resource';
import { StarredRepo } from '../contract';
class StarredRepoManager {
  constructor() {}
  /**
   * ListStarred
   */
  public async ListStarred(): Promise<Array<StarredRepo>> {
    return RepoRA.ListStarred();
  }
}

export default new StarredRepoManager();
