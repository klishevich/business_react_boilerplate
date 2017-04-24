import fetch from 'isomorphic-fetch';
import { url } from '../constants';

import { getLists } from '../api/lists'

export const REQUEST_LISTS_INDEX = 'REQUEST_LISTS_INDEX';
export const RECEIVE_LISTS_INDEX = 'RECEIVE_LISTS_INDEX';
export const INVALIDATE_LISTS_INDEX = 'INVALIDATE_LISTS_INDEX';
export const REQUEST_DELETE_LISTS_INDEX = 'REQUEST_DELETE_LISTS_INDEX';
export const RECEIVE_DELETE_LISTS_INDEX = 'RECEIVE_DELETE_LISTS_INDEX';

// не понятно как это работает?
export function fetchListsIfNeeded() {
  console.log('actions fetchListsIfNeeded');
  return (dispatch, getState) => {
    dispatch(invalidateLists());
    if (shouldFetchLists(getState())) {
      // console.log('start dispatch(fetchLists())');
      return dispatch(fetchLists());
    }
  }
}

function invalidateLists() {
  console.log('actions invalidateLists');
  return {
    type: INVALIDATE_LISTS_INDEX
  }
}

function requestLists() {
  console.log('actions requestLists');
  return {
    type: REQUEST_LISTS_INDEX
  }
}

function receiveLists(lists) {
  console.log('actions receiveLists', lists);
  return {
    type: RECEIVE_LISTS_INDEX,
    payload: { lists, lastUpdated: Date.now() }
  }
}

// function fetchLists() {
//   return (dispatch) => {
//     dispatch(requestLists())
//     return  fetch(url + '/lists', {
//       headers: {
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(json => dispatch(receiveLists(json)))
//   }
// }

function fetchLists() {
  console.log('actions fetchLists');
  return (dispatch) => {
    dispatch(requestLists())
    return getLists()
    .then(response => response.json())
    .then(json => dispatch(receiveLists(json)))
    // catch
  }
}

function shouldFetchLists(state) {
  console.log('actions shouldFetchLists', state);
  const lists = state.listsIndex.lists;
  console.log('lists', lists);
  if (!lists) {
    console.log('!lists');
    return true;
  } else if (lists.isFetching) {
    console.log('lists.isFetching');
    return false;
  } else {
    console.log('else', state.listsIndex.didInvalidate);
    return state.listsIndex.didInvalidate;
  }
}

// НАДО ДОДЕЛАТЬ

export function deleteList(list_id) {
  console.log('actions deleteList', list_id);
  return (dispatch, getState) => {
    dispatch(invalidateLists());
    return dispatch(deleteList2(list_id));
  }
}

function deleteList2(list_id) {
  console.log('actions deleteList2', list_id);
  return (dispatch) => {
    dispatch(requestDeleteList());
    return fetch(url + '/lists' + list_id, {
        method: 'DELETE'
    })
    .then(() => dispatch(removeList(list_id)))
  }
}

function requestDeleteList(list_id) {
  console.log('actions requestDeleteList', list_id);
  return {
    type: REQUEST_DELETE_LISTS_INDEX,
    list_id
  }
}

function removeList(list_id) {
  console.log('actions removeList', list_id);
  return {
    type: RECEIVE_DELETE_LISTS_INDEX,
    list_id
  }
}

