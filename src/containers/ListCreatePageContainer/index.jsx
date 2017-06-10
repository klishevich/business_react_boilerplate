import { connect } from 'react-redux';
import ListNewPage from '../../components/ListNewPage';
import { changeListField, createList } from './actions';
import { clearFlashMessage } from '../ListEditPageContainer/actions';

function mapDispatchToProps(dispatch) {
  return {
    handleChangeField: (fieldName, fieldValue) => dispatch(changeListField(fieldName, fieldValue)),
    handleSave: () => dispatch(createList()),
    handleClearFlashMessage: () => dispatch(clearFlashMessage()),
  };
}

function mapStateToProps(state) {
  const { listCreatePage } = state;
  return { ...listCreatePage };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNewPage);
