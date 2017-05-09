import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cutDate } from '../../utils/convertDate';

function ListEditPage(props) {
  const { isFetching, list } = props;
  // console.log(props);
  return (
    <div className="list-edit-page">
      <h2>List Edit Page</h2>
      {isFetching &&
        <h3>Loading...</h3>
      }
      {!isFetching &&
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="list-id">ID</label>
                <input
                  className="form-control"
                  id="list-id"
                  defaultValue={list.id}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="list-name">List</label>
                <input
                  type="text"
                  className="form-control"
                  id="list-name"
                  placeholder="List Name"
                  defaultValue={list.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="list-first-name">First Name</label>
                <input
                  className="form-control"
                  id="list-first-name"
                  defaultValue={list.first_name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="list-last-name">Last Name</label>
                <input
                  className="form-control"
                  id="list-last-name"
                  defaultValue={list.last_name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="list-birth-date">Bitrh Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="list-birth-date"
                  defaultValue={list.birth_date}
                />
              </div>
              <div className="form-group">
                <label htmlFor="list-created-at">Created at</label>
                <input
                  type="date"
                  className="form-control"
                  id="list-created-at"
                  defaultValue={cutDate(list.created_at)}
                />
              </div>
              <div className="form-group">
                <div className="checkbox">
                  <label htmlFor="list-is-alive">
                    <input type="checkbox" defaultChecked={list.is_alive} id="list-is-alive" />
                    Is Alive
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="list-order">Order</label>
                <input
                  type="number"
                  className="form-control"
                  id="list-order"
                  defaultValue={list.order}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Save Changes</button>
            </form>
          </div>
        </div>
      }
    </div>
  );
}

ListEditPage.propTypes = {
  list: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ListEditPage;
