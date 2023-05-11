import React from "react";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import Project from "./Project";

const ProjectSection = () => {
    return (
        <VStack style={{backgroundColor:"#EAE7DC", color: "#8E8D8A", padding:"0 0 10vh 0 "}} spacing={10}>
            <Heading>PROJECTS</Heading>
            <VStack spacing={8}>
                <HStack padding="0 10vw" spacing={10}>
                    <Project
                        title="This Website!"
                        description="This portfolio website is built using the React.js library, and is currently still a work in progress! Feel free to help me improve on my code thank you!

                        Technologies used: React.js, HTML, CSS"
                        link=""
                    />
                    <Project
                        title="IoT Lie Detector"
                        description="Group project using Iot devices, cloud computing, and machine learning to detect lies from facial and biometric features.

                        Technologies used: Python Tensorflow, OpenCV, Arduino, MQTT"
                        link=""
                    />
                </HStack>
                <HStack padding="0 10vw" spacing={10}>
                    <Project
                        title="BookFace"
                        description="BookFace is a group software engineering "
                        link=""
                    />
                    <Project
                        title="Greg"
                        description="Greg is my first software engineering project, and is a chatbot that helps you keep track of day today tasks, events and deadlines.

                        Technologies used: Java, Gradle"
                        link=""
                    />
                </HStack>
            </VStack>
        </VStack>
    );
}

export default ProjectSection;