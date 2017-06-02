import { combineReducers } from 'redux';
import listsPage from './containers/ListsPageContainer/reducer';
import listEditPage from './containers/ListEditPageContainer/reducer';
import listCreatePage from './containers/ListCreatePageContainer/reducer';

const rootReducer = combineReducers({
  listsPage,
  listEditPage,
  listCreatePage,
});

export default rootReducer;
