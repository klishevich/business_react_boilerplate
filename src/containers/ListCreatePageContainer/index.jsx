import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListNewPage from '../../components/ListNewPage';
import { changeListField, createList } from './actions';
import { clearFlashMessage } from '../ListEditPageContainer/actions';

const ListCreatePageContainer = (props) => {
  const { list, isEdit, dispatch, flashMessage } = props;
  return (
    <div className="list-create-page-container">
      <ListNewPage
        list={list}
        handleChangeField={fieldObject => dispatch(changeListField(fieldObject))}
        isEdit={isEdit}
        handleSave={() => dispatch(createList())}
        flashMessage={flashMessage}
        handleClearFlashMessage={() => dispatch(clearFlashMessage())}
      />
    </div>
  );
};

ListCreatePageContainer.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  flashMessage: PropTypes.string,
};

ListCreatePageContainer.defaultProps = {
  list: {},
  isEdit: false,
  flashMessage: '',
};

function mapStateToProps(state) {
  const { listCreatePage } = state;
  return { ...listCreatePage };
}

export default connect(mapStateToProps)(ListCreatePageContainer);
