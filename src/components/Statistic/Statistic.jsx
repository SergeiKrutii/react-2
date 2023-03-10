import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css';
import StatisticItem from './StatisticItem/StatisticItem';
import Section from '../Section/Section';

const Statistic = ({ stats }) => {
  console.log('🚀 ~ stats:', stats);
  return (
    <Section title="Upload stats">
      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </Section>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistic;
