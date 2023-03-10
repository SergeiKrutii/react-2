import user from '../data/user.json';
import UserProfile from './UserProfile/UserProfile';
import Statistic from './Statistic/Statistic';
import statList from '../data/statList.json';
import friendsList from '../data/friends.json';
import Friends from './Friends/Friends';
import Transaction from './Transaction/Transaction';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={statList} />
      <Friends friends={friendsList} />
      <Transaction transactions={transactions} />
    </>
  );
};
