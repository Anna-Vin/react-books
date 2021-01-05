import { env } from '../config/environments';
import axios from 'axios';

export default class BookService {
  getBooksByName(name, page) {
    return axios.get(`${env.googleBooks}?q=${name}=${page || 0}`);
  }
};