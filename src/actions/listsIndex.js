import { APIgetLists, APIdeleteList } from '../api/lists';

export const REQUEST_LISTS_INDEX = 'REQUEST_LISTS_INDEX';
export const RECEIVE_LISTS_INDEX = 'RECEIVE_LISTS_INDEX';
export const INVALIDATE_LISTS_INDEX = 'INVALIDATE_LISTS_INDEX';
export const REQUEST_DELETE_LISTS_INDEX = 'REQUEST_DELETE_LISTS_INDEX';
export const RECEIVE_DELETE_LISTS_INDEX = 'RECEIVE_DELETE_LISTS_INDEX';

function invalidateLists() {
  // console.log('actions invalidateLists');
  return {
    type: INVALIDATE_LISTS_INDEX,
    payload: { didInvalidate: true },
  };
}

function shouldFetchLists(state) {
  // console.log('actions shouldFetchLists', state);
  const lists = state.listsIndex.lists;
  // console.log('lists', lists);
  if (!lists) {
    // console.log('!lists');
    return true;
  } else if (lists.isFetching) {
    // console.log('lists.isFetching');
    return false;
  }
  // console.log('else', state.listsIndex.didInvalidate);
  return state.listsIndex.didInvalidate;
}

function requestLists() {
  // console.log('actions requestLists');
  return {
    type: REQUEST_LISTS_INDEX,
    payload: { isFetching: true, didInvalidate: false },
  };
}

function receiveLists(lists) {
  // console.log('actions receiveLists', lists);
  return {
    type: RECEIVE_LISTS_INDEX,
    payload: { lists, lastUpdated: Date.now(), isFetching: false, didInvalidate: false },
  };
}

function fetchLists() {
  // console.log('actions fetchLists');
  return (dispatch) => {
    dispatch(requestLists());
    return APIgetLists()
    .then(response => response.json())
    .then(json => dispatch(receiveLists(json)));
    // catch
  };
}

export function fetchListsIfNeeded() {
  // console.log('actions fetchListsIfNeeded');
  return (dispatch, getState) => {
    dispatch(invalidateLists());
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
    type: REQUEST_DELETE_LISTS_INDEX,
    payload: { deletingListIndex },
  };
}

function receiveDeleteList() {
  // console.log('actions receiveDeleteList');
  return {
    type: RECEIVE_DELETE_LISTS_INDEX,
    payload: { deleting_list_index: null },
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
