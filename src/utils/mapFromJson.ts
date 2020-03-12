import { StarredRepo, Owner } from '../contract';
const toOwner = ({ owner }): Owner => {
  const login: string = owner['login'];
  const id: string = owner['id'];
  const url: string = owner['url'];
  return {
    login,
    id,
    url
  };
};
const toStarredRepo = (repo: any): StarredRepo => {
  const id: string = repo['id'];
  const name: string = repo['name'];
  const owner: Owner = toOwner(repo);
  const description: string = repo['description'];
  const language: string = repo['language'];
  return {
    id,
    name,
    owner,
    description,
    language
  };
};
const mapFromJson = (repos: Array<Object>): Array<StarredRepo> => {
  return repos.map(toStarredRepo);
};

export default mapFromJson;
