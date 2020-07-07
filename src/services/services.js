import axios from 'axios';
import { api_key } from '../constants/apiKey';

export const getAstroidUrl = () => {
  return axios.get(`${process.env.REACT_APP_ASTROIDS_URL}?api_key=${api_key}`);
};
