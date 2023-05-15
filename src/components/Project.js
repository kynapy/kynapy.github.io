import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { VStack } from "@chakra-ui/react";
import "../css/Project.css";

const Project = (props) => {
    return (
        <article style={{maxWidth: "80%"}}>
            <VStack style={{
                padding: "20px 30px",
            }}>
                <h1 style={{fontSize: "30px"}}>{ props.title }</h1>
                <p>{ props.description }</p>
                <a href={ props.link }><FontAwesomeIcon icon={ faGithub } size="2x" /></a>
            </VStack>
        </article>
    )
}

export default Project;