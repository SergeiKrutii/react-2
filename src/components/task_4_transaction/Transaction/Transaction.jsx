import React from 'react';
import PropTypes from 'prop-types';
import TransactonBody from '../TransactonBody/TransactonBody';
import s from './Transaction.module.css';

const Transaction = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(elem => {
        return <TransactonBody key={elem.id} elem={elem} />;
      })}
    </table>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default Transaction;
