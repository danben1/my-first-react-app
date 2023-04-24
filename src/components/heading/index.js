import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header(props) {
    return (
        <Box
            as="section"
            textAlign="center"
            color="#F7FAFC"
            bg="#011638"
            pt={10}
        >
            <Heading fontWeight={800} fontSize={40} pb={25}>
                {props.title}
            </Heading>
            <Text fontWeight={500} fontSize={20} pb={150}>
                {props.subtitle}
            </Text>
        </Box>
    );
}
