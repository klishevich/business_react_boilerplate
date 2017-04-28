// axios
// нормализация данных
// валидация
import fetch from 'isomorphic-fetch';
import { url } from '../constants';

export function APIgetLists() {
  return fetch(url + '/lists', {
    headers: {
      'Accept': 'application/json'
    }
  })
}

export function APIdeleteList(list_id) {
	return fetch(url + '/lists/' + list_id, {
    method: 'DELETE'
  })
}
