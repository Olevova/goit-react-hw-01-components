import css from "./FriendListItem.module.css"
export const FriendListItem = ({ avatar, name, isOnline}) =>
{
    return (
        <li class="item">
            <span className = {isOnline? css.true : css.false}>{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    )
    }
