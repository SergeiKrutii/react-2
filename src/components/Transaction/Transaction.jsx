import React from 'react';
import PropTypes from 'prop-types';
import TransactonBody from './TransactonBody/TransactonBody';
import s from './Transaction.module.css';
import Section from 'components/Section/Section';

const Transaction = ({ transactions }) => {
  return (
    <Section sizeStyle={true}>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {transactions.map(elem => (
          <TransactonBody key={elem.id} elem={elem} />
        ))}
      </table>
    </Section>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ),
};

export default Transaction;
