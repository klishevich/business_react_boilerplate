import { APIgetList } from '../../api/lists';
import { setEditListId } from '../ListsPageContainer/actions';

export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const CHANGE_LIST_FIELD = 'CHANGE_LIST_FIELD';

function requestList() {
  return {
    type: REQUEST_LIST,
    payload: { isFetching: true },
  };
}

function receiveList(list) {
  return {
    type: RECEIVE_LIST,
    payload: { list, isFetching: false, isEdit: false },
  };
}

export function fetchList(listId) {
  return (dispatch) => {
    dispatch(requestList());
    return APIgetList(listId)
    .then(response => response.json())
    .then(json => dispatch(receiveList(json)))
    .then(() => dispatch(setEditListId(0)));
  };
}

function shouldFetchList(state, listId) {
  const list = state.listEditPage.list;
  // console.log('shouldFetchList list', list);
  // console.log('shouldFetchList listId', listId);
  if (!list) {
    return true;
  } else if (list.id === parseInt(listId, 10)) {
    return false;
  }
  return true;
}

export function fetchListIfNeeded(listId) {
  return (dispatch, getState) => {
    if (shouldFetchList(getState(), listId)) {
      return dispatch(fetchList(listId));
    }
    return false;
  };
}

function changeListField(fieldObject) {
  return {
    type: CHANGE_LIST_FIELD,
    payload: { list: fieldObject, isEdit: true },
  };
}

export function changeListFieldAsync(fieldObject) {
  return (dispatch, getState) => {
    const state = getState();
    const listId = state.listEditPage.list.id;
    const currentEditListId = state.listsPage.editListId;
    if (currentEditListId !== listId) {
      dispatch(setEditListId(listId));
    }
    dispatch(changeListField(fieldObject));
  };
}
