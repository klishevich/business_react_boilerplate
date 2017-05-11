import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cutDate } from '../../utils/convertDate';

class ListEditPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange(e) {
    // console.log('handleChange', e.target);
    this.props.handleChangeField({ [e.target.name]: e.target.value });
  }

  handleCheckboxChange(e) {
    // console.log('handleCheckboxChange', e.target);
    this.props.handleChangeField({ [e.target.name]: e.target.checked });
  }

  render() {
    const { isFetching, list } = this.props;
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
                    value={list.id}
                    disabled
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="list-created-at">Created at</label>
                  <input
                    type="date"
                    className="form-control"
                    id="list-created-at"
                    name="created_at"
                    disabled
                    value={cutDate(list.created_at)}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="list-name">List</label>
                  <input
                    type="text"
                    className="form-control"
                    id="list-name"
                    placeholder="List Name"
                    name="name"
                    value={list.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="list-first-name">First Name</label>
                  <input
                    className="form-control"
                    id="list-first-name"
                    name="first_name"
                    value={list.first_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="list-last-name">Last Name</label>
                  <input
                    className="form-control"
                    id="list-last-name"
                    name="last_name"
                    value={list.last_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="list-birth-date">Bitrh Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="list-birth-date"
                    name="birth_date"
                    value={list.birth_date}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label htmlFor="list-is-alive">
                      <input
                        type="checkbox"
                        name="is_alive"
                        checked={list.is_alive}
                        id="list-is-alive"
                        readOnly
                        onClick={this.handleCheckboxChange}
                      />
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
                    name="order"
                    value={list.order}
                    onChange={this.handleChange}
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

}

ListEditPage.propTypes = {
  list: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleChangeField: PropTypes.func.isRequired,
};

export default ListEditPage;
