import React from 'react';
import PropTypes from 'prop-types';

const TransactonBody = ({ elem }) => {
  const { type, amount, currency } = elem;
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
  elem: PropTypes.object.isRequired,
};

export default TransactonBody;
