import { HStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const AboutSection = () => {
    return (
        <FullScreenSection backgroundColor="pink" margin={0}>
            <HStack width="100%" spacing={0}>
                <Box backgroundColor="grey" height="100vh" width="60%" margin={0}>
                    <p>test</p>
                </Box>
                <Box backgroundColor="white" height="100vh" width="40%" margin={0}>
                    <p>lol</p>
                </Box>
            </HStack>
        </FullScreenSection>
    )
}

export default AboutSection;