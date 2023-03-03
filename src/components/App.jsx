import user from '../data/user.json';
import UserProfile from './task_1_userprofile/UserProfile/UserProfile';
import Section from './task_2_statistics/Section/Section';
import Statistic from './task_2_statistics/Statistic/Statistic';
import statList from '../data/statList.json';
import friendsList from '../data/friends.json';
import Friends from './task_3_friendsList/Friends/Friends';
import Transaction from './task_4_transaction/Transaction/Transaction';
import transactions from '../data/transactions.json';

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
      <Section title="Upload stats">
        <Statistic stats={statList} />
      </Section>
      <Section>
        <Friends friends={friendsList} />
      </Section>
      <Section sizeStyle={true}>
        <Transaction transactions={transactions} />
      </Section>
    </div>
  );
};
