import { connect } from 'react-redux';
import { fetchLists, fetchListsIfNeeded, deleteList } from './actions';
import ListsPage from '../../components/ListsPage';

function mapDispatchToProps(dispatch) {
  return {
    handleListDelete: (index, listId) => dispatch(deleteList(index, listId)),
    handleFetchListsIfNeeded: () => dispatch(fetchListsIfNeeded()),
    handleFetchLists: () => dispatch(fetchLists()),
  };
}

function mapStateToProps(state) {
  const { listsPage } = state;
  return { ...listsPage };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPage);
