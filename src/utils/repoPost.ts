import axios from 'axios';
const params = {
  per_page: 100
};

const repoPost = (endpoint: string, token: string, reqParams: Object = {}) =>
  axios.post(endpoint, {
    params: {
      ...params,
      ...reqParams
    },
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

export default repoPost;
