import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions';

import "../index.css";

console.log(user);

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      />
      <Statistics title="ok" stats={data} />
      <div>
        <FriendList friends={friends} />
        </div>
      <TransactionHistory items={transactions} />
    </div>
    
  );
};

  //  <div style={{
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: 40,
  //   color: '#010101'
  //  ></div>

  