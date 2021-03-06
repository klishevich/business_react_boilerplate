import { APIgetLists, APIdeleteList } from '../../api/lists';

export const REQUEST_LISTS = 'REQUEST_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const INVALIDATE_LISTS = 'INVALIDATE_LISTS';
export const REQUEST_DELETE_LIST = 'REQUEST_DELETE_LIST';
export const RECEIVE_DELETE_LIST = 'RECEIVE_DELETE_LIST';
export const SET_EDIT_LIST_ID = 'SET_EDIT_LIST_ID';

export function invalidateLists() {
  // console.log('actions invalidateLists');
  return {
    type: INVALIDATE_LISTS,
    payload: { didInvalidate: true },
  };
}

function shouldFetchLists(state) {
  // console.log('actions shouldFetchLists', state);
  const lists = state.listsPage.lists;
  // console.log('lists', lists);
  if (!lists) {
    // console.log('!lists');
    return true;
  } else if (lists.isFetching) {
    // console.log('lists.isFetching');
    return false;
  }
  // console.log('else', state.listsPage.didInvalidate);
  return state.listsPage.didInvalidate;
}

function requestLists() {
  // console.log('actions requestLists');
  return {
    type: REQUEST_LISTS,
    payload: { isFetching: true, didInvalidate: false },
  };
}

function receiveLists(lists, isTest = false) {
  // console.log('actions receiveLists', lists);
  const lastUpdated = isTest ? '1900-01-01' : Date.now();
  return {
    type: RECEIVE_LISTS,
    payload: { lists, lastUpdated, isFetching: false, didInvalidate: false },
  };
}

export function fetchLists(isTest = false) {
  // console.log('actions fetchLists');
  return (dispatch) => {
    dispatch(requestLists());
    return APIgetLists()
    .then(response => response.json())
    .then(json => dispatch(receiveLists(json, isTest)));
    // catch
  };
}

export function fetchListsIfNeeded() {
  // console.log('actions fetchListsIfNeeded');
  return (dispatch, getState) => {
    if (shouldFetchLists(getState())) {
      // console.log('start dispatch(fetchLists())');
      return dispatch(fetchLists());
    }
    return false;
  };
}

// DELETING

function requestDeleteList(deletingListIndex) {
  // console.log('actions requestDeleteList', deleting_list_index);
  return {
    type: REQUEST_DELETE_LIST,
    payload: { deletingListIndex },
  };
}

function receiveDeleteList() {
  // console.log('actions receiveDeleteList');
  return {
    type: RECEIVE_DELETE_LIST,
    payload: { deletingListIndex: null },
  };
}

export function deleteList(index, listId) {
  // console.log('actions deleteList');
  return (dispatch) => {
    dispatch(invalidateLists());
    dispatch(requestDeleteList(index));
    return APIdeleteList(listId)
    .then(() => dispatch(receiveDeleteList()));
  };
}

export function setEditListId(listId) {
  return {
    type: SET_EDIT_LIST_ID,
    payload: { editListId: listId },
  };
}
