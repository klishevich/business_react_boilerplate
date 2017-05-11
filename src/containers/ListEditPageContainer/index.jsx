import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListEditPage from '../../components/ListEditPage';
import { fetchListIfNeeded, changeListFieldAsync, fetchList } from './actions';

class ListEditPageContainer extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchListIfNeeded(match.params.listId));
  }

  render() {
    // console.log('ListEditPageContainer props', this.props);
    const { list, isFetching, dispatch, isEdit, match } = this.props;
    return (
      <div className="list-edit-page-container">
        <ListEditPage
          list={list}
          isFetching={isFetching}
          handleChangeField={fieldObject => dispatch(changeListFieldAsync(fieldObject))}
          isEdit={isEdit}
          handleDiscard={() => dispatch(fetchList(match.params.listId))}
        />
      </div>
    );
  }
}

ListEditPageContainer.propTypes = {
  list: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  isEdit: PropTypes.bool,
};

ListEditPageContainer.defaultProps = {
  list: {},
  isFetching: false,
  isEdit: false,
};

function mapStateToProps(state) {
  const { listEditPage } = state;
  const {
    list,
    isFetching,
    isEdit,
  } = listEditPage;

  return {
    list,
    isFetching,
    isEdit,
  };
}

export default connect(mapStateToProps)(ListEditPageContainer);
