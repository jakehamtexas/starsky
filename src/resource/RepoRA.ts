import { StarredRepo } from '../contract';

class RepoRA {
  /**
   * ListStarred
   */
  public async ListStarred(): Promise<Array<StarredRepo>> {
    return [];
  }
}

export default new RepoRA();
