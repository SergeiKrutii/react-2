import React from 'react';
import PropTypes from 'prop-types';

const TransactonBody = ({ elem: { type, amount, currency } }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactonBody.propTypes = {
  elem: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default TransactonBody;
