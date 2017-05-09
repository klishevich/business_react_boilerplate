import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/lib/Button';
import './style.css';
// import convertDate from '../../utils/convertDate';
// import H2 from '../../components/H2';

function ListEditPage(props) {
  return (
    <div className="list-edit-page">
      <h2>List Edit Page</h2>
      <div>{ props.list.name }</div>
    </div>
  );
}

ListEditPage.propTypes = {
  list: PropTypes.object.isRequired,
};

export default ListEditPage;
