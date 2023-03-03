import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsItem.module.css';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.statusg}>{isOnline}</span>
      ) : (
        <span className={s.statusr}>{isOnline}</span>
      )}

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
