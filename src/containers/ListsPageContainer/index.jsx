import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLists, fetchListsIfNeeded, deleteList } from './actions';
import ListsPage from '../../components/ListsPage';

class ListsPageContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchListsIfNeeded());
  }

  render() {
    // console.log('ListsPageContainer props', this.props);
    // console.log('ListsPageContainer', this.props);
    const { lists, isFetching, lastUpdated, dispatch, editListId } = this.props;
    return (
      <div className="lists-page-container">
        <ListsPage
          lists={lists}
          isFetching={isFetching}
          lastUpdated={lastUpdated}
          handleListDelete={(index, listId) => dispatch(deleteList(index, listId))}
          handleFetchListsIfNeeded={() => dispatch(fetchLists())}
          editListId={editListId}
        />
      </div>
    );
  }
}

ListsPageContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  editListId: PropTypes.number,
};

ListsPageContainer.defaultProps = {
  lists: [],
  isFetching: false,
  lastUpdated: 0,
  editListId: 0,
};

function mapStateToProps(state) {
  const { listsPage } = state;
  return { ...listsPage };
}

export default connect(mapStateToProps)(ListsPageContainer);
