import { combineReducers } from 'redux';
import listsPage from './containers/ListsPageContainer/reducer';
import listEditPage from './containers/ListEditPageContainer/reducer';
import listNewPage from './containers/ListNewPageContainer/reducer';

const rootReducer = combineReducers({
  listsPage,
  listEditPage,
  listNewPage,
});

export default rootReducer;
