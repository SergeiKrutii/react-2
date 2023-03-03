import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from '../../task_1_userprofile/StatsList/StatsList';
import StatisticItem from './StatisticItem/StatisticItem';

const Statistic = ({ stats }) => {
  return (
    <StatisticList>
      {stats.map(elem => {
        const { id, label, percentage } = elem;
        return <StatisticItem key={id} label={label} percentage={percentage} />;
      })}
    </StatisticList>
  );
};

Statistic.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default Statistic;
