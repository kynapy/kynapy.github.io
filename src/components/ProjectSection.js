import React from "react";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import Project from "./Project";

const ProjectSection = (props, ref) => {
    return (
        <VStack
            ref={ref}
            style={{color: "black", padding: "5vh 0vw", minHeight: "100vh", width: "100%", maxWidth: "100%"}}
            spacing={10}
            data-aos="fade-up"
        >
            <Heading>PROJECTS</Heading>
            <VStack spacing={8}>
                { props.isMobile ? <MobileProjectSection /> : <DesktopProjectSection />}
            </VStack>
        </VStack>
    );
}

const DesktopProjectSection = () => {
    return (
        <>
            <HStack
                spacing={10}
                padding="0 20vw"
            >
                <Project
                    title="This Website!"
                    description="This portfolio website is built using the React.js library, and is currently still a work in progress! Feel free to help me improve on my code thank you!

                    Technologies used: React.js, HTML, CSS"
                    link="https://github.com/kynapy/kynapy.github.io"
                />
                <Project
                    title="IoT Lie Detector"
                    description="Group project using Iot devices, cloud computing, and machine learning to detect lies from facial and biometric features.

                    Technologies used: Python Tensorflow, OpenCV, Arduino, MQTT"
                    link="https://github.com/kynapy/cs3237-lie-detector"
                />
            </HStack>
            <HStack
                spacing={10}
                padding="0 20vw"
            >
                <Project
                    title="BookFace"
                    description="BookFace is a software engineering group project, designed for small libraries to keep track of library members and books, and provides a system to track book loans."
                    link="https://github.com/AY2223S1-CS2103-F14-4/tp"
                />
                <Project
                    title="Greg"
                    description="Greg is my first software engineering project, which is a chatbot that helps you keep track of day today tasks, events and deadlines.

                    Technologies used: Java, Gradle"
                    link="https://github.com/kynapy/ip"
                />
            </HStack>
        </>
    )
}

const MobileProjectSection = () => {
    return (
        <>
            <Project
                title="This Website!"
                description="This portfolio website is built using the React.js library, and is currently still a work in progress! Feel free to help me improve on my code thank you!

                Technologies used: React.js, HTML, CSS"
                link="https://github.com/kynapy/kynapy.github.io"
            />
            <Project
                title="IoT Lie Detector"
                description="Group project using Iot devices, cloud computing, and machine learning to detect lies from facial and biometric features.

                Technologies used: Python Tensorflow, OpenCV, Arduino, MQTT"
                link="https://github.com/kynapy/cs3237-lie-detector"
            />

            <Project
                title="BookFace"
                description="BookFace is a software engineering group project, designed for small libraries to keep track of library members and books, and provides a system to track book loans."
                link="https://github.com/AY2223S1-CS2103-F14-4/tp"
            />
            <Project
                title="Greg"
                description="Greg is my first software engineering project, which is a chatbot that helps you keep track of day today tasks, events and deadlines.

                Technologies used: Java, Gradle"
                link="https://github.com/kynapy/ip"
            />
        </>
    )
}

export default React.forwardRef(ProjectSection);