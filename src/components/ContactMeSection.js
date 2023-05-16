import { VStack, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import "../css/ContactMeSection.css";
import emailjs from "@emailjs/browser";
import FormSubmitResponse from "./FormSubmitResponse";

const ContactMeSection = (props, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_habd5fn", "template_2j8gymr", form.current, "BUpVd_VfIJl4Rn1Xm")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
        setFormSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <VStack
            ref={ref}
            className="contactSection"
            spacing={5}
            data-aos="fade-up"
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
            <FormSubmitResponse trigger={formSubmitted} setTrigger={setFormSubmitted}>
                <Heading style={{paddingBottom: "20px"}}>Success!</Heading>
                <Text>Thank you, your message has been sent and I will get back to you shortly!</Text>
            </FormSubmitResponse>
        </VStack>
    )
}

export default React.forwardRef(ContactMeSection);