import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListsContainer.css';
import H2 from '../../components/H2';
import { fetchListsIfNeeded, deleteList } from '../../actions/listsIndex';
import { connect } from 'react-redux';
import ListsIndex from '../../components/ListsIndex';
import Button from 'react-bootstrap/lib/Button';

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
      <div className="ListsContainer">
      	<H2 title="Lists Container" />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
          	<Button bsStyle="primary" bsSize="large" onClick={()=>(dispatch(fetchListsIfNeeded()))}>
          		Refresh
          	</Button>
          }
        </p>
        {isFetching && lists.length === 0 &&
          <h3>Loading...</h3>
        }
        {!isFetching && lists.length === 0 &&
          <h3>No any data ... hit Refresh?</h3>
        }
        {lists.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <ListsIndex
              lists={lists}
              isFetching={isFetching}
              handleListDelete={(index, list_id)=>(dispatch(deleteList(index,list_id)))}
            />
          </div>
        }
      </div>
    );
  }
}

ListsContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
}

ListsContainer.defaultProps = {
  lists: [],
  isFetching: false,
}

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
  }
}

export default connect(mapStateToProps)(ListsContainer)
