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

  componentDidMount() {
    const { match } = this.props;
    this.props.handleFetchList(match.params.listId);
  }

  handleDiscard() {
    const { match } = this.props;
    this.props.handleDiscard(match.params.listId);
  }

  handleChange(e) {
    this.props.handleChangeField(e.target.name, e.target.value);
  }

  handleCheckboxChange(e) {
    this.props.handleChangeField(e.target.name, e.target.checked);
  }

  render() {
    const { list, isFetching, isEdit, flashMessage,
      handleSave, handleClearFlashMessage } = this.props;
    return (
      <div className="list-edit-page">
        <h2>List Edit Page</h2>
        {isFetching &&
          <h3>Loading...</h3>
        }
        {!isFetching &&
          <div>
            <div className="row">
              <div className="col-md-12">
                {flashMessage !== '' &&
                  <div className="alert alert-success" role="alert">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={handleClearFlashMessage}
                    >
                      <span aria-hidden="true">×</span>
                    </button>{flashMessage}
                  </div>
                }
                {isEdit &&
                  <div className="alert alert-info" role="alert">
                    <strong>Draft:</strong> Save to database or Discard
                  </div>
                }
              </div>
            </div>
            <div className="row">
              <form>
                <div className="col-md-6">
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
                    <label htmlFor="list-first-name">First Name</label>
                    <input
                      className="form-control"
                      id="list-first-name"
                      name="first_name"
                      value={list.first_name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg list-edit-page__save-button"
                    disabled={!isEdit}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-lg"
                    disabled={!isEdit}
                    onClick={() => this.handleDiscard()}
                  >
                    Discard
                  </button>
                </div>
                <div className="col-md-6">
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
                </div>
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
  match: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  isEdit: PropTypes.bool,
  flashMessage: PropTypes.string,
  handleFetchList: PropTypes.func.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDiscard: PropTypes.func.isRequired,
  handleClearFlashMessage: PropTypes.func.isRequired,
};

ListEditPage.defaultProps = {
  list: {},
  isFetching: false,
  isEdit: false,
  flashMessage: '',
};

export default ListEditPage;
