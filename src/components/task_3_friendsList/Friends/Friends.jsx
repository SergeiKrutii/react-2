import React from 'react';
import PropTypes from 'prop-types';

import Friendsitem from '../FriendsItem/FriendsItem.jsx';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(elem => {
        const { avatar, name, isOnline } = elem;
        return (
          <Friendsitem
            key={elem.id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friends;
