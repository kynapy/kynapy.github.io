import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import image from "../images/kynapy.png";
import "@fontsource/league-spartan";

const AboutSection = () => {
    return (
        <VStack
            backgroundColor="#EAE7DC"
            height="90vh"
            width="100%"
            spacing={8}
            padding="20vh 0"
            alignItems="center"
            color="#8E8D8A"
        >
            <Box style={{display:"grid", placeItems: "center", padding:"0px 20vw", rowGap:"1vh"}}>
                <Heading fontSize={50}>KIYAN ANG</Heading>
                <Heading fontSize={26}>Junior Software Developer</Heading>
                <Text align="center" fontFamily="League Spartan" fontSize={22}>Fresh graduate from the National University of Singapore (NUS), majoring in Life Sciences and a minor in Computer Sciences.
                </Text>
                <img
                    src={ image }
                    alt="Kiyan"
                    style={{ borderRadius: "50%", width: "250px" }}
                />
            </Box>
        </VStack>
    )
}

export default AboutSection;