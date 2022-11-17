import {Profile} from "./Profile/Profile";
import user from 'user.json';
// const RT = ({ name, email }) =>
// (<div>
//   <h1>{name}</h1>
//   <p>{email}</p>
// </div>);
  
console.log(user);


export const App = () => {
  return <div>
    <Profile avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />;
    </div>  
};
  
  //  <div style={{
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: 40,
  //   color: '#010101'
  // }} ></div>

  