import { APIpostList } from '../../api/lists';
import { invalidateLists } from '../ListsPageContainer/actions';

export const CHANGE_LIST_NEW_FIELD = 'CHANGE_LIST_NEW_FIELD';
export const REQUEST_CREATE_LIST = 'REQUEST_CREATE_LIST';
export const RECEIVE_CREATE_LIST = 'RECEIVE_CREATE_LIST';
export const REQUEST_LIST_NEW = 'REQUEST_LIST_NEW';
export const RECEIVE_LIST_NEW = 'RECEIVE_LIST_NEW';
export const CLEAR_LIST_NEW = 'CLEAR_LIST_NEW';

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

export function changeListField(fieldName, fieldValue) {
  return {
    type: CHANGE_LIST_NEW_FIELD,
    payload: { list: { [fieldName]: fieldValue }, isEdit: true, flashMessage: '' },
  };
}

function clearListNew() {
  return {
    type: CLEAR_LIST_NEW,
    payload: { flashMessage: 'Created Successfuly. And form cleared!' },
  };
}

export function createList() {
  return (dispatch, getState) => {
    dispatch(requestCreateList());
    const state = getState();
    const list = state.listNewPage.list;
    return APIpostList(list)
    .then(resultList => dispatch(receiveCreateList(resultList)))
    .then(() => dispatch(clearListNew()))
    .then(() => dispatch(invalidateLists()));
  };
}
