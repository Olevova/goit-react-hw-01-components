import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) =>
    
    friends.map(({ avatar, name, isOnline, id }) => {
        return <li key ={id} class="item">
            <span className={isOnline? css.true : css.false}>{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    }
    
    )


FriendList.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}
