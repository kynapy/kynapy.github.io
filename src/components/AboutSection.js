import { Box, VStack, Heading, Text, HStack } from "@chakra-ui/react";
import image from "../images/kynapy.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
    return (
        <VStack
            backgroundColor="#EAE7DC"
            height="90vh"
            width="100%"
            spacing={8}
            padding="13vh 0"
            alignItems="center"
            color="#8E8D8A"
        >
            <Box style={{display:"grid", placeItems: "center", padding:"0px 26vw", rowGap:"1vh"}}>
                <Heading fontSize={50}>KIYAN ANG</Heading>
                <Heading fontSize={24}>Software Engineer</Heading>
                <Text align="center" fontSize={18}>Fresh graduate from the National University of Singapore (NUS), with a major in Life Sciences and a minor in Computer Sciences.
                </Text>
                <img
                    src={ image }
                    alt="Kiyan"
                    style={{ borderRadius: "50%", width: "250px", paddingTop: "20px", paddingBottom: "20px"}}
                />
                <HStack>
                    <li><a href="https://www.github.com/kynapy"><FontAwesomeIcon icon={faGithub} size="3x" style={{marginRight: "25px"}}/></a></li>
                    <li><a href="https://www.linkedin.com/in/kiyan-ang"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a></li>
                </HStack>
            </Box>
        </VStack>
    )
}

export default AboutSection;