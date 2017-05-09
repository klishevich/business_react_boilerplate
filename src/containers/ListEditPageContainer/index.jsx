import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListEditPage from '../../components/ListEditPage';

class ListEditPageContainer extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(fetchListsIfNeeded());
  }

  render() {
    // console.log('ListsPageContainer props', this.props);
    console.log('ListEditPageContainer', this.props.match.params);
    const list = this.props.lists[0] ? this.props.lists[0] : { name: 'no data' };
    return (
      <div className="list-edit-page-container">
        <ListEditPage
          list={list}
        />
      </div>
    );
  }
}

ListEditPageContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

ListEditPageContainer.defaultProps = {
  lists: [],
};

function mapStateToProps(state) {
  // console.log('ListsPageContainer mapStateToProps', state);
  const { listsPage } = state;
  // console.log('ListsPageContainer mapStateToProps listsPage', listsPage);
  const {
    lists,
  } = listsPage;

  // console.log('ListsPageContainer mapStateToProps lists', lists);

  return {
    lists,
  };
}

export default connect(mapStateToProps)(ListEditPageContainer);
