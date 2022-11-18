// import PropTypes from "prop-types";
// import css from "./Statistics.module.css";

export const FriendList = ({friends}) =>
    friends.map(({ avatar, name, isOnline, id }) => {
        return <li key ={id} class="item">
            <span className="status"></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    })

