import React from 'react';
import PropTypes from 'prop-types';
import UserStatistic from '../UserStatistic/UserStatistic';
import s from './UserProfile.module.css';
import StatsList from 'components/task_1_userprofile/StatsList/StatsList';

const UserProfile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <StatsList>
        <UserStatistic followers={followers} />
        <UserStatistic views={views} />
        <UserStatistic likes={likes} />
      </StatsList>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default UserProfile;
