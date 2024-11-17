import axios from 'axios';

const API = 'http://localhost:1337';

export const getArticles = async () => {
  return axios.get(`${API}/articles`);
};

export const createArticle = async (article, token) => {
  return axios.post(`${API}/articles`, article, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
