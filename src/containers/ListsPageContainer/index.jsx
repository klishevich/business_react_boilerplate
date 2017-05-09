import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListsIfNeeded, deleteList } from './actions';
import ListsPage from '../../components/ListsPage';

class ListsPageContainer extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(fetchListsIfNeeded());
  }

  render() {
    // console.log('ListsPageContainer props', this.props);
    // console.log('ListsPageContainer', this.props);
    const { lists, isFetching, lastUpdated, dispatch } = this.props;
    return (
      <div className="lists-page-container">
        <ListsPage
          lists={lists}
          isFetching={isFetching}
          lastUpdated={lastUpdated}
          handleListDelete={(index, listId) => dispatch(deleteList(index, listId))}
          handleFetchListsIfNeeded={() => dispatch(fetchListsIfNeeded())}
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
};

ListsPageContainer.defaultProps = {
  lists: [],
  isFetching: false,
  lastUpdated: 0,
};

function mapStateToProps(state) {
  // console.log('ListsPageContainer mapStateToProps', state);
  const { listsPage } = state;
  // console.log('ListsPageContainer mapStateToProps listsPage', listsPage);
  const {
    lists,
    isFetching,
    lastUpdated,
  } = listsPage;

  // console.log('ListsPageContainer mapStateToProps lists', lists);

  return {
    lists,
    isFetching,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(ListsPageContainer);
