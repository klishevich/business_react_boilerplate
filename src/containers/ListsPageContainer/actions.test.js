import {
  INVALIDATE_LISTS,
} from './actions';

import {
	invalidateLists,
} from './actions';

describe('actions', () => {
  it('should create invalidateLists action', () => {
    const expectedAction = {
      type: INVALIDATE_LISTS,
      payload: {didInvalidate: true},
    }
    expect(invalidateLists()).toEqual(expectedAction)
  })
})
