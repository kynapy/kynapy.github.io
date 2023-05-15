import { VStack, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import "../css/ContactMeSection.css";
import emailjs from "@emailjs/browser";

const ContactMeSection = (props, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_habd5fn", "template_2j8gymr", form.current, "BUpVd_VfIJl4Rn1Xm")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
        alert("Your message has been sent. Thank you!");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <VStack
            ref={ref}
            className="contactSection"
            spacing={5}
        >
            <Heading>Get In Touch</Heading>
            <Text id="formDescription">
                Do feel free to give me any feedback or comments on this website, as I happily welcome ways to improve my code.
                Do also drop any questions and I would get back to you!
            </Text>
            <div>
                <form
                    onSubmit={handleSubmit}
                    ref={ form }
                >
                    <label >Name: </label>
                    <input
                        className="inputFields"
                        type="text"
                        name="from_name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        required />
                    <label>Email: </label>
                    <input
                        className="inputFields"
                        type="email"
                        name="reply_to"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                    />
                    <label>Message: </label>
                    <textarea
                        className="inputFields"
                        name="message"
                        value={ message }
                        onChange={ (e) => setMessage(e.target.value) }
                        required
                    ></textarea>
                    <input
                        type="submit"
                        className="submitButton"
                    />
                </form>
            </div>
        </VStack>
    )
}

export default React.forwardRef(ContactMeSection);