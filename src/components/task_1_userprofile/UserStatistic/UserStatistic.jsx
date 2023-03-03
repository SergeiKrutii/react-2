import React from 'react';
import PropTypes from 'prop-types';
import s from '../UserStatistic/UserStatistic.module.css';

const UserStatistic = props => {
  if (props.followers) {
    return (
      <li className={s.stats__item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{props.followers}</span>
      </li>
    );
  }
  if (props.views) {
    return (
      <li className={s.stats__item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{props.views}</span>
      </li>
    );
  }
  if (props.likes) {
    return (
      <li className={s.stats__item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{props.likes}</span>
      </li>
    );
  }
};

UserStatistic.propTypes = {
  prop: PropTypes.number,
};

export default UserStatistic;
