import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchLists } from './actions';
import { REQUEST_LISTS, RECEIVE_LISTS } from './actions';
import nock from 'nock';
import { url } from '../../constants';
import expect from 'expect'; // You can use any testing library

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const serverResponse = [
	{
		"id":47,
		"name":"Good Songs",
		"order":1,
		"created_at":"2017-05-13T18:25:04.812Z",
		"updated_at":"2017-05-13T18:26:50.165Z",
		"first_name":"Michael",
		"last_name":"Jackson",
		"birth_date":"1958-08-29",
		"is_alive":false
	},
	{
		"id":49,
		"name":"Pop Songs",
		"order":34,
		"created_at":"2017-05-13T18:25:04.831Z",
		"updated_at":"2017-05-13T19:18:52.854Z",
		"first_name":"Taylor",
		"last_name":"Swift",
		"birth_date":"1989-12-13",
		"is_alive":true
	}
]

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  });

  it('creates RECEIVE_LISTS when fetching lists has been done', () => {
    nock(url)
      .get('/lists')
      .reply(200, serverResponse);

    const expectedActions = [
      { type: REQUEST_LISTS, payload: { isFetching: true, didInvalidate: false }, },
      { type: RECEIVE_LISTS, payload: { lists: serverResponse, lastUpdated: '1900-01-01', isFetching: false, didInvalidate: false }, }
    ];
    
    const store = mockStore({ });

    return store.dispatch(fetchLists(true))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      });
  })
})
