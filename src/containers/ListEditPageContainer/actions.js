import { APIgetList, APIpatchList } from '../../api/lists';
import { setEditListId, invalidateLists } from '../ListsPageContainer/actions';

export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const CHANGE_LIST_FIELD = 'CHANGE_LIST_FIELD';
export const REQUEST_PATCH_LIST = 'REQUEST_PATCH_LIST';
export const RECEIVE_PATCH_LIST = 'RECEIVE_PATCH_LIST';
export const CLEAR_FLASH_MESSAGE = 'CLEAR_FLASH_MESSAGE';

function requestList() {
  return {
    type: REQUEST_LIST,
    payload: { isFetching: true, flashMessage: '' },
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

function changeListField2(fieldObject) {
  return {
    type: CHANGE_LIST_FIELD,
    payload: { list: fieldObject, isEdit: true, flashMessage: '' },
  };
}

export function changeListField(fieldObject) {
  return (dispatch, getState) => {
    const state = getState();
    const listId = state.listEditPage.list.id;
    const currentEditListId = state.listsPage.editListId;
    if (currentEditListId !== listId) {
      dispatch(setEditListId(listId));
    }
    dispatch(changeListField2(fieldObject));
  };
}

function requestPatchList() {
  return {
    type: REQUEST_PATCH_LIST,
    payload: { isFetching: true, flashMessage: '' },
  };
}

function receivePatchList(list) {
  return {
    type: RECEIVE_PATCH_LIST,
    payload: { list, isFetching: false, isEdit: false, flashMessage: 'Saved Successfuly' },
  };
}

export function patchList() {
  return (dispatch, getState) => {
    dispatch(requestPatchList());
    const state = getState();
    const listId = state.listEditPage.list.id;
    const list = state.listEditPage.list;
    return APIpatchList(listId, list)
    .then(resultList => dispatch(receivePatchList(resultList)))
    .then(() => dispatch(setEditListId(0)))
    .then(() => dispatch(invalidateLists()));
  };
}

export function clearFlashMessage() {
  // console.log('clearFlashMessage');
  return {
    type: CLEAR_FLASH_MESSAGE,
    payload: { flashMessage: '' },
  };
}
