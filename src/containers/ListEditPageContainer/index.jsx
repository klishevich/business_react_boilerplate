import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListEditPage from '../../components/ListEditPage';
import { fetchList } from './actions';

class ListEditPageContainer extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchList(match.params.listId));
  }

  render() {
    // console.log('ListEditPageContainer props', this.props);
    const { list, isFetching } = this.props;
    return (
      <div className="list-edit-page-container">
        <ListEditPage
          list={list}
          isFetching={isFetching}
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
};

ListEditPageContainer.defaultProps = {
  list: {},
  isFetching: false,
};

function mapStateToProps(state) {
  const { listEditPage } = state;
  const {
    list,
    isFetching,
  } = listEditPage;

  return {
    list,
    isFetching,
  };
}

export default connect(mapStateToProps)(ListEditPageContainer);
