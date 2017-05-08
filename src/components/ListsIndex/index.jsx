import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import './ListsIndex.css';
import convertDate from '../../utils/convertDate';
import H2 from '../../components/H2';

function ListsIndex(props) {
  const { handleListDelete, isFetching, lastUpdated, handleFetchListsIfNeeded, lists } = props;
  return (
    <div className="lists-index">
      <div className="lists-index-header">
        <H2 title="Lists Component" />
        <div>
          {lastUpdated > 0 &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
        </div>
        <div className="list-index-last-updated-button">
          <Button
            bsStyle="primary"
            disabled={isFetching}
            bsSize="large"
            onClick={() => handleFetchListsIfNeeded()}
          >
              Refresh
          </Button>
        </div>
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
                <th className="lists-index-table__th-buttons" />
                <th>ID</th>
                <th>List Name</th>
                <th>Order</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of birth</th>
              </tr>
              {lists.map((list, i) =>
                <tr key={list.id}>
                  <td>
                    <div>
                      <a
                        className="lists-index-table__edit-button btn btn-primary"
                        href="#edit"
                      >
                        Edit
                      </a>
                      {!isFetching &&
                        <button
                          className="lists-index-table__edit-button
                            lists-index-table__edit-button_bold btn btn-danger"
                          onClick={() => handleListDelete(i, list.id)}
                        >
                          Delete
                        </button>
                      }
                    </div>
                  </td>
                  <td>{list.id}</td>
                  <td>{list.name}</td>
                  <td>{list.order}</td>
                  <td>{list.first_name}</td>
                  <td>{list.last_name}</td>
                  <td>{convertDate(list.birth_date)}</td>
                </tr>,
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

ListsIndex.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListDelete: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number.isRequired,
  handleFetchListsIfNeeded: PropTypes.func.isRequired,
};

export default ListsIndex;
