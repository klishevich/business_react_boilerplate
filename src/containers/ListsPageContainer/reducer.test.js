import listsPageReducer from './reducer';
import {
  INVALIDATE_LISTS,
  REQUEST_LISTS,
  RECEIVE_LISTS,
  REQUEST_DELETE_LIST,
  RECEIVE_DELETE_LIST,
  SET_EDIT_LIST_ID,
} from './actions';

it('should return the initial state', () => {
  expect(
    listsPageReducer(undefined, {})
  ).toEqual({
    isFetching: false,
    lists: [],
    didInvalidate: true,
   })
})
