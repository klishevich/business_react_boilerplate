import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListsIndex.css';
import { convertDate } from '../../utils/convertDate';
import H2 from '../../components/H2';
import Button from 'react-bootstrap/lib/Button';

export default class ListsIndex extends Component {
  render() {
    const { handleListDelete, isFetching, lastUpdated, handleFetchListsIfNeeded, lists } = this.props;
    return (
      <div className="lists-index">
        <div className="lists-index-header">
          <H2 title="Lists Component" />
          <p>
            {lastUpdated &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>
            }
            {!isFetching &&
              <Button bsStyle="primary" bsSize="large" onClick={()=>handleFetchListsIfNeeded()}>
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
        </div>
        {lists.length > 0 &&
          <div className="lists-index-table" style={{ opacity: isFetching ? 0.5 : 1 }}>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th className="lists-index-table__th-buttons"></th>
                  <th>ID</th>
                  <th>List Name</th>
                  <th>Order</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of birth</th>
                </tr>
                {lists.map((list, i) =>
                  <tr key={i}>
                    <td>
                      <div>
                        <a className="lists-index-table__edit-button btn btn-primary" href="#">Edit</a>
                        {!isFetching &&
                          <button className="lists-index-table__edit-button lists-index-table__edit-button_bold btn btn-danger" onClick={()=>handleListDelete(i, list.id)}>Delete</button>
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
        }
      </div>
    )
  }
}

ListsIndex.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListDelete: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  handleFetchListsIfNeeded: PropTypes.func.isRequired,
}
