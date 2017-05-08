import React from 'react';
import PropTypes from 'prop-types';
import './H2.css';

function H2(props) {
  return (
    <div className="H2">
      <h2>{props.title}</h2>
    </div>
  );
}

H2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default H2;
