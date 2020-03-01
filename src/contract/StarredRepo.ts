import Owner from './Owner';
export default interface StarredRepo {
  id: string;
  name: string;
  owner: Owner;
  description: string;
  language: string;
}
