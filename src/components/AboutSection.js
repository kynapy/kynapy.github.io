import { HStack, Box, VStack, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../images/kynapy.png";

const AboutSection = () => {
    return (
        <FullScreenSection>
            <HStack width="100%" height="100%" spacing={0}>
                <VStack
                    backgroundColor="grey"
                    height="100%"
                    width="100%"
                    spacing={8}
                    padding="30vh 0"
                    alignItems="center"
                >
                    <Box style={{display:"grid", placeItems: "center"}}>
                        <Heading>Kiyan Ang</Heading>
                        <Heading>Junior Software Developer</Heading>
                        <Heading size="xs"></Heading>
                        <Heading size="xs">Fresh graduate from the National University of Singapore (NUS), majoring in Life Sciences and a minor in Computer Sciences.
                        </Heading>
                        <img
                            src={ image }
                            alt="Kiyan"
                            style={{ borderRadius: "50%", width: "250px" }}
                        />
                    </Box>
                </VStack>
            </HStack>
        </FullScreenSection>
    )
}

export default AboutSection;