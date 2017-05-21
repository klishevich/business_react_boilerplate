import { connect } from 'react-redux';
import ListEditPage from '../../components/ListEditPage';
import { fetchListIfNeeded, changeListField, patchList, fetchList, clearFlashMessage } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    handleFetchList: listId => dispatch(fetchListIfNeeded(listId)),
    handleChangeField: (filedName, fieldValue) => dispatch(changeListField(filedName, fieldValue)),
    handleSave: () => dispatch(patchList()),
    handleDiscard: listId => dispatch(fetchList(listId)),
    handleClearFlashMessage: () => dispatch(clearFlashMessage()),
  };
}

function mapStateToProps(state) {
  const { listEditPage } = state;
  return { ...listEditPage };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEditPage);
