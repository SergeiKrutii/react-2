import React from 'react';
import PropTypes from 'prop-types';
import s from './Stats.module.css';

const Stats = ({ stats }) => {
  return (
    <ul className={s.stat__list}>
      {Object.entries(stats).map((stat, i) => (
        <li className={s.stats__item} key={`stst-${i}`}>
          <span className={s.label}>{stat[0]}</span>
          <span className={s.quantity}>{stat[1]}</span>
        </li>
      ))}
    </ul>
  );
};

Stats.propTypes = {
  folowers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;
