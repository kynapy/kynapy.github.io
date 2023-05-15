import { VStack, Heading, Text, HStack, Box } from "@chakra-ui/react";
import image from "../images/kynapy.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../css/AboutSection.css"

const AboutSection = (props) => {
    return (
        <VStack
            minHeight="90vh"
            width="100%"
            spacing="1vh"
            padding={props.isMobile ? "10vh 15vw 0 15vw" : "13vh 28vw 0 28vw"}
            alignItems="center"
            color="#8E8D8A"
            textAlign="center"
        >
            <Heading fontSize={50}>KIYAN ANG</Heading>
            <Heading fontSize={24}>Software Engineer</Heading>
            <Text align="center" fontSize={18}>
                Fresh graduate from the National University of Singapore (NUS), with a major in Life Sciences and a minor in Computer Sciences.
            </Text>
            <Box id="image-cropper">
                <img
                    src={ image }
                    alt="Kiyan"
                    id="kiyan-image"
                />
            </Box>
            <HStack>
                <li><a href="https://www.github.com/kynapy">
                    <FontAwesomeIcon icon={faGithub} size="3x" style={{marginRight: "25px"}}/>
                </a></li>
                <li><a href="https://www.linkedin.com/in/kiyan-ang">
                    <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </a></li>
            </HStack>
        </VStack>
    )
}

export default AboutSection;