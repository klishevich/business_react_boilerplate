// axios
// нормализация данных
// валидация
import fetch from 'isomorphic-fetch';
import { url } from '../constants';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

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

export function APIgetList(listId) {
  return fetch(`${url}/lists/${listId}`, {
    headers: {
      Accept: 'application/json',
    },
  });
}

export function APIcreateList(list) {
  return fetch(`${url}/lists`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      list,
    }),
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function APIpatchList(listId, list) {
  return fetch(`${url}/lists/${listId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      list,
    }),
  })
  .then(checkStatus)
  .then(parseJSON);
}
