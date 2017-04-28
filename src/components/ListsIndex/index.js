import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListsIndex.css';
import { convertDate } from '../../utils/convertDate';

export default class ListsIndex extends Component {
  render() {
    const { handleListDelete, isFetching } = this.props;
    return (
      <div className="ListsIndex">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th className="ListsIndex_thButtons"></th>
              <th>ID</th>
              <th>List Name</th>
              <th>Order</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of birth</th>
            </tr>
            {this.props.lists.map((list, i) =>
              <tr key={i}>
                <td>
                  <div>
                    <a className="ListsIndex_editButton btn btn-primary" href="#">Edit</a>
                    {!isFetching &&
                      <button className="btn btn-danger" onClick={()=>(handleListDelete(i, list.id))}>Delete</button>
                    }
                  </div>
                </td>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.order}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td>{convertDate(list.birth_date)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

ListsIndex.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListDelete: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
