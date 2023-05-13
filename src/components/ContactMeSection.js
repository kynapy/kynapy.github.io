import { VStack, Heading, Text } from "@chakra-ui/react";
import React from "react"
import "../css/ContactMeSection.css";

const ContactMeSection = (props, ref) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <VStack
            ref={ref}
            style={{
                backgroundColor: "#EAE7DC",
                minHeight: "90vh",
                maxHeight: "40vh",
                maxWidth: "100%",
                padding: "2vh 0"
            }}
        >
            <Heading>Get In Touch</Heading>
            <Text
                style={{marginTop: "20px", maxWidth: "50%", textAlign: "center"}}
            >
                Do feel free to give me any feedback or comments on this website, as I happily welcome ways to improve my code.
                Do also drop any questions and I would get back to you!
            </Text>
            <div style={{
                margin: "20px",
                maxHeight: "50%",
            }}>
                <form
                    style={{
                        display: "grid",
                        rowGap:"5px",
                        textAlign: "center",
                        placeItems: "center",
                        minWidth: "400px",
                        maxHeight: "50%",
                    }}
                    onSubmit={handleSubmit}
                >
                    <label >Name: </label>
                    <input className="inputFields" type="text" id="name" />
                    <label>Email: </label>
                    <input className="inputFields"/>
                    <label>Message: </label>
                    <textarea className="inputFields"></textarea>
                    <button style={{
                        borderRadius: 6,
                        padding: "5px 5px 1px 5px",
                        backgroundColor: "#D8C3A5",
                        marginTop: "20px"
                    }}>
                        Submit
                    </button>
                </form>
            </div>
        </VStack>
    )
}

export default React.forwardRef(ContactMeSection);