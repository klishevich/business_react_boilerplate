import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import convertDate from '../../utils/convertDate';
import H2 from '../../components/H2';

function ListsPage(props) {
  const { handleListDelete, isFetching, lastUpdated, handleFetchListsIfNeeded, lists } = props;
  return (
    <div className="lists-page">
      <div className="lists-page-header">
        <H2 title="Lists Page" />
        <div>
          {lastUpdated > 0 &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
        </div>
        <div className="lists-page__last-updated-button">
          <button
            className="btn btn-primary btn-lg"
            disabled={isFetching}
            onClick={() => handleFetchListsIfNeeded()}
          >
            Refrash
          </button>
        </div>
        {isFetching && lists.length === 0 &&
          <h3>Loading...</h3>
        }
        {!isFetching && lists.length === 0 &&
          <h3>No any data ... hit Refresh?</h3>
        }
      </div>
      {lists.length > 0 &&
        <div className="lists-page-table" style={{ opacity: isFetching ? 0.5 : 1 }}>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th className="lists-page-table__th-buttons" />
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
                    {!isFetching &&
                      <div>
                        <Link
                          to={`/lists/${list.id}`}
                          className="lists-page-table__edit-button btn btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          className="lists-page-table__edit-button
                            lists-page-table__edit-button--bold btn btn-danger"
                          onClick={() => handleListDelete(i, list.id)}
                        >
                          Delete
                        </button>
                      </div>
                    }
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

ListsPage.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListDelete: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number.isRequired,
  handleFetchListsIfNeeded: PropTypes.func.isRequired,
};

export default ListsPage;
