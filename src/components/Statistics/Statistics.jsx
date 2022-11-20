import PropTypes from "prop-types";
// import css from "./Statistics.module.css";

export const Statistics = ({stats,title= "Upload stats"}) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {stats.map((stat)=> <li key = {stat.id} className="item">
            <span className="label">{ stat.label}</span>
            <span className="percentage">{ stat.percentage+"%"}</span>
    </li>)}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    parcentage: PropTypes.number.isRequired
  })
}