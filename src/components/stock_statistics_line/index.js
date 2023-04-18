import "./index.css";

export default function StockStatisticsLine(props) {
    return (
        <div className="statisticsLine">
            <p className="statName">{props.statName}:</p>
            <p className="statNumber">{props.statNumber}</p>
        </div>
    );
}
