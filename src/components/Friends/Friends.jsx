import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section.jsx';
import Friendsitem from './FriendsItem/FriendsItem.jsx';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <Section>
      <ul className={s.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <Friendsitem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </Section>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default Friends;
