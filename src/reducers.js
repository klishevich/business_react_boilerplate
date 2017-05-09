import { combineReducers } from 'redux';
import listsPage from './containers/ListsPageContainer/reducer';

const rootReducer = combineReducers({
  listsPage,
});

export default rootReducer;
