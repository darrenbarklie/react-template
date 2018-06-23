import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-3fadf.firebaseio.com/'
});

export default instance;