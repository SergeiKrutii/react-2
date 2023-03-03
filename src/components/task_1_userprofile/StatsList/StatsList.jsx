import React from 'react';
import PropTypes from 'prop-types';
import s from './StatsList.module.css';

const StatsList = ({ children }) => {
  return <ul className={`${s.stats} `}>{children}</ul>;
};

StatsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatsList;
