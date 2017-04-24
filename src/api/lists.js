// axios
// нормализация данных
// валидация
import fetch from 'isomorphic-fetch';
import { url } from '../constants';

export function getLists() {
  return fetch(url + '/lists', {
    headers: {
      'Accept': 'application/json'
    }
  })
}
