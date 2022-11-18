import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from 'user.json';
import data from 'data.json';

console.log(user);


// export const App = () => {
//   return <div>
//     <Profile avatar={user.avatar}
//       name={user.name}
//       tag={user.tag}
//       location={user.location}
//       stats={user.stats}
//     />;
//     </div>  
// };
  
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      />
      <Statistics title ="ok" stats={data} />
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

  