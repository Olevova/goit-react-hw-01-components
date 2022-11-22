import css from "./FriendListItem.module.css"
export const FriendListItem = ({ avatar, name, isOnline}) =>
{
    return (
        <li class={css.item}>
            <span className = {isOnline? css.true : css.false}>{isOnline}</span>
            <img class={css.avatar} src={avatar} alt={name} width="48" />
            <p class={css.name}>{name}</p>
        </li>
    )
    }
