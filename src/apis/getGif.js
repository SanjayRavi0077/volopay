import axios from 'axios';
import {API_KEY} from '../assets/values';

export default axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: API_KEY,
  },
});
