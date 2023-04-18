import "./index.css";
import StockStatistics from "../stock_statistics";
import StockImage from "../stock_logo";
import StockTitle from "../stock_title";
import StockBio from "../stock_bio";

export default function StockTrumpCard({ stocks }) {
    const stockTrumps = stocks.map((stock) => (
        <div className="card">
            <StockTitle name={stock.name} ticker={stock.ticker} />
            <StockImage />
            <StockStatistics
                key={stock.ticker}
                price={stock.price}
                sharesOut={stock.sharesOut}
                revenue={stock.revenue}
                earnings={stock.earnings}
                eps={stock.eps}
            />
            <StockBio bio={stock.bio} />
        </div>
    ));

    return stockTrumps;
}
