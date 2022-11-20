import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({username, tag, location, avatar, stats}) => {
    console.log({username, tag, location, avatar, stats});
    return <div className={css.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{"@" + tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

// "jgluke",
// function SocialCard ({ name, tag, location, avatar, stats }) {
 
//   return (
//     <div className={css.profile}>
//       <div className={css.description}>
//         <img src={avatar} alt="user avatar" className={css.avatar} />
//         <p className={css.name}>{name}</p>
//         <p className={css.tag}>@{tag}</p>
//         <p className={css.location}>{location}</p>
//       </div>

//       <ul className={css.stats}>
//         <li>
//           <span className={css.label}>Followers</span>
//          <span className={css.quantity}>{stats.followers}</span>
//         </li>
//         <li>
//           <span className={css.label}>Views</span>
//           <span className={css.quantity}>{stats.views}</span>
//         </li>
//         <li>
//           <span className={css.label}>Likes</span>
//           <span className={css.quantity}>{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// SocialCard.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default SocialCard;