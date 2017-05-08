// axios
// нормализация данных
// валидация
import fetch from 'isomorphic-fetch';
import { url } from '../constants';

export function APIgetLists() {
  return fetch(`${url}/lists`, {
    headers: {
      Accept: 'application/json',
    },
  });
}

export function APIdeleteList(listId) {
  return fetch(`${url}/lists/${listId}`, {
    method: 'DELETE',
  });
}
