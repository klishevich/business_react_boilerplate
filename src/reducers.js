import { combineReducers } from 'redux';
import listsPage from './containers/ListsPageContainer/reducer';
import listEditPage from './containers/ListEditPageContainer/reducer';

const rootReducer = combineReducers({
  listsPage,
  listEditPage,
});

export default rootReducer;
