import user from '../data/user.json';
import UserProfile from './UserProfile/UserProfile';
// import UserStatistic from './UserProfile/UserStatistic/UserStatistic';

export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
