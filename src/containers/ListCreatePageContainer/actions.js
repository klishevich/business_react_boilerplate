import { APIcreateList } from '../../api/lists';
import { invalidateLists } from '../ListsPageContainer/actions';

export const CHANGE_LIST_FIELD = 'CHANGE_LIST_FIELD';
export const REQUEST_CREATE_LIST = 'REQUEST_CREATE_LIST';
export const RECEIVE_CREATE_LIST = 'RECEIVE_CREATE_LIST';
export const CLEAR_FLASH_MESSAGE = 'CLEAR_FLASH_MESSAGE';
export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

function requestCreateList() {
  return {
    type: REQUEST_CREATE_LIST,
    payload: { isFetching: true, flashMessage: '' },
  };
}

function receiveCreateList(list) {
  return {
    type: RECEIVE_CREATE_LIST,
    payload: { list, isFetching: false, isEdit: false, flashMessage: 'Created Successfuly' },
  };
}

function changeListField2(fieldObject) {
  return {
    type: CHANGE_LIST_FIELD,
    payload: { list: fieldObject, isEdit: true, flashMessage: '' },
  };
}

export function changeListField(fieldObject) {
  return (dispatch) => {
    dispatch(changeListField2(fieldObject));
  };
}

export function createList() {
  return (dispatch, getState) => {
    dispatch(requestCreateList());
    const state = getState();
    const list = state.listCreatePage.list;
    return APIcreateList(list)
    .then(resultList => dispatch(receiveCreateList(resultList)))
    .then(() => dispatch(invalidateLists()));
  };
}

export function clearFlashMessage() {
  return {
    type: CLEAR_FLASH_MESSAGE,
    payload: { flashMessage: '' },
  };
}
