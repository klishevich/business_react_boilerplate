import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListsIfNeeded, deleteList } from '../../actions/listsIndex';
import ListsIndex from '../../components/ListsIndex';

class ListsContainer extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(fetchListsIfNeeded());
  }

  render() {
    // console.log('ListsContainer props', this.props);
    // console.log('ListsContainer', this.props);
    const { lists, isFetching, lastUpdated, dispatch } = this.props;
    return (
      <div className="lists-container">
        <ListsIndex
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

ListsContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

ListsContainer.defaultProps = {
  lists: [],
  isFetching: false,
  lastUpdated: 0,
};

function mapStateToProps(state) {
  // console.log('ListsContainer mapStateToProps', state);
  const { listsIndex } = state;
  // console.log('ListsContainer mapStateToProps listsIndex', listsIndex);
  const {
    lists,
    isFetching,
    lastUpdated,
  } = listsIndex;

  // console.log('ListsContainer mapStateToProps lists', lists);

  return {
    lists,
    isFetching,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(ListsContainer);