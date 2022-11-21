import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types";
// import css from "./FriendList.module.css";
// import {FriendListItem} from "./FriendListItem/FriendListItem.jsx"

export const FriendList = ({ friends }) => {
    return (<ul className="friend-list"> {friends.map((frend) => {
        return <FriendListItem
            key={frend.id}
            name={frend.name}
            isOnline={frend.isOnline}
            avatar = {frend.avatar}/>
    })}
    </ul>);
}


FriendList.protoType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}
