import "./index.css";
import StockStatisticsLine from "../stock_statistics_line";

export default function StockStatistics(props) {
    return (
        <div className="statistics">
            <StockStatisticsLine
                statName=" Stock Price"
                statNumber={props.price}
            />
            <StockStatisticsLine
                statName="Shares Outstanding"
                statNumber={props.sharesOut}
            />
            <StockStatisticsLine
                statName="Revenue"
                statNumber={props.revenue}
            />
            <StockStatisticsLine
                statName="Earnings"
                statNumber={props.earnings}
            />
            <StockStatisticsLine
                statName="Earnings per share (EPS)"
                statNumber={props.eps}
            />
        </div>
    );
}
