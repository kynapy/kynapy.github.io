import { VStack, Heading } from "@chakra-ui/react";
import React from "react";

const ExperienceSection = (props, ref) => {
    return (
        <VStack
            ref={ref}
            style={{
                minHeight: "90vh",
                maxHeight: "40vh",
                maxWidth: "100%",
                padding: "2vh 0"
            }}
        >
            <Heading>Professional Experience</Heading>
        </VStack>
    )
}

export default React.forwardRef(ExperienceSection);