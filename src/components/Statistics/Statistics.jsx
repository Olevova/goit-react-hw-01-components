import PropTypes from "prop-types";
import {SectionStatistic,StaticList, Item} from "./Statistics.styled"
// import css from "./Statistics.module.css";

export const Statistics = ({stats, title}) => {
  return <SectionStatistic>
    {title &&(
      <h2 className="title">{title}</h2>)}
        <StaticList>
        {stats.map((stat)=> <Item key = {stat.id}>
            <span className="label">{ stat.label}</span>
            <span className="percentage">{ stat.percentage+"%"}</span>
    </Item>)}
  </StaticList>
</SectionStatistic>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    parcentage: PropTypes.number.isRequired
  })
}

// {stats.map((stat)=> <li key = {stat.id} className="item">
//             <span className="label">{ stat.label}</span>
//             <span className="percentage">{ stat.percentage+"%"}</span>
//     </li>)}