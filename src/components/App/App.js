import logo from "/Users/Dan/OneDrive/Documents/SchoolOfCode/coursework/react_recap/my-app/src/logo.svg";
import "./App.css";
import StockTrumpCard from "../stock_trump_card";
import StockImage from "../stock_logo";

function App() {
    const stocks = [
        {
            name: "Apple",
            ticker: "AAPL",
            price: "$100",
            sharesOut: "250,000,000",
            revenue: "2bln",
            earnings: "200mln",
            eps: "$2.23",
            bio: "Apple Inc. (AAPL) is a multinational technology company headquartered in Cupertino, California. Founded in 1976, it has become a leading innovator in consumer electronics, software, and services, with iconic products such as the iPhone, iPad, and Mac, and a strong ecosystem of services including the App Store, Apple Music, and iCloud, making it one of the most valuable and influential companies in the world.",
        },
        {
            name: "Meta",
            ticker: "FB",
            price: "$250",
            sharesOut: "120,000,000",
            revenue: "1.2bln",
            earnings: "100mln",
            eps: "$1.45",
        },
    ];

    return (
        <div>
            <StockTrumpCard stocks={stocks} />
        </div>
    );

    /*<div className="App">
            <header className="App-header">
                <List toDo={"shop"} />
                <Comment
                    initials="DB"
                    author="Dan Bennett"
                    content="Test React App"
                />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
    </header>
            
    </div>*/
}

export default App;

//"Stock Trumps" card game
//create a form to display stock information when called from API
//create a component to display data
//component called Stock card
//stock name and ticker at the top
//stock image/logo as hero banner
//stock/company information down the side
//stat section
//display 5 stats under stats section
//Stock Price
//Number of shares outstanding
//revenue
//earnings
//pass it props (hard-coded at first) that will eventually be fed by API
