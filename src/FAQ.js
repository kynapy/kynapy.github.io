import QnA from './QnA';

function FAQ() {
    const q1 = "Q: Why does the website look so bad?";
    const a1 = "A: The website is currently is a work in progress and has recently been converted from Markdown to HTML (as of 19 Jan 2023) and now to React (as of 3 Feb 2023). More will be added soon so stay tuned!";
    const q2 = "Q: Why not a second major in CS? ";
    const a2 = "A: I actually have taken sufficient credits and fulfilled the requirements required for a second major in CS. However, due to certain administrative issues such as the late application (due to late awakening to my interest in CS) and the limited number of spaces offered by my university, I was unable to officially get the second major as part of my degree.";
    const q3 = "Q: Are you still thinking of a career in the biomedical industry in the future?";
    const a3 = "A: Currently, my aim is to break into the tech industry. However, I have also considered careers which involve the use of both my expertise, such as computational biology.";

    return (
        <div>
            <h2>FAQ</h2>
            <QnA question={q1} answer={a1}/><br></br>
            <QnA question={q2} answer={a2}/><br></br>
            <QnA question={q3} answer={a3}/>
        </div>
    )
}

export default FAQ;