import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box
            as="section"
            textAlign="center"
            color="#F7FAFC"
            bg="#011638"
            pt={30}
            pb={120}
            px={32}
        >
            <Heading fontWeight={800} fontSize={48} pb={25}>
                Stock Trumps
            </Heading>
            <Text fontWeight={500} fontSize={24} pb={50}>
                Test your knowledge of the stock market
            </Text>
        </Box>
    );
}
