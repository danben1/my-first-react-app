import logo from "/Users/Dan/OneDrive/Documents/SchoolOfCode/coursework/react_recap/my-app/src/logo.svg";
import "./App.css";
import StockTrumpCard from "../stock_trump_card";
import StockImage from "../stock_logo";
import Header from "../heading";
import {
    Box,
    Flex,
    Stack,
    VStack,
    HStack,
    Heading,
    Button,
    Center,
} from "@chakra-ui/react";

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
            bio: "Meta originally founded as Facebook was setup by mark zuckeberg in 2003. It is a social media giant and also owns instagram",
        },
    ];

    return (
        <Box bg="whitesmoke">
            <Header />
            <HStack
                spacing="120px"
                alignItems="flex-start"
                justifyContent="center"
                mt="-100px"
            >
                <StockTrumpCard stocks={stocks} />
            </HStack>
            <Button
                className="b"
                colorScheme={"green"}
                _hover={{ background: "blue" }}
                fontSize={15}
                margin={15}
            >
                Refresh Deck
            </Button>
        </Box>
    );
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
