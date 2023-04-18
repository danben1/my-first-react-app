import "./index.css";

export default function StockTitle(props) {
    return (
        <div className="title-block">
            <h1 className="stock-name">{props.name}</h1>
            <h2 className="stock-ticker">{props.ticker}</h2>
        </div>
    );
}
