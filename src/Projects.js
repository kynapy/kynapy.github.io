import Project from "./Project";

function Projects() {
    const title1 = "Greg";
    const link1 = "http://kynapy.me/ip/";
    const desc1 = "Software engineering individual project. Greg is a application that looks like a chatbot and helps you keep track of day to day tasks, events and deadlines. ";

    const title2 = "Lie Detector";
    const link2 = "http://kynapy.me/cs3237-lie-detector/";
    const desc2 = "IoT group project. The lie detector uses IoT devices to measure biological features and uses machine learning in the cloud to determine whether a person is lying.";

    const title3 = "BookFace";
    const link3 = "https://ay2223s1-cs2103-f14-4.github.io/tp/";
    const desc3 = "Software engineering group project. BookFace is an application designed for small libraries to keep track of library members and books, and provides a system to track loans of books.";

    const title4 = "This Website!";
    const link4 = "https://github.com/kynapy/kynapy.github.io";
    const desc4 = "This is the project I am currently working on. This project focuses on building my portfolio website using React. CSS will be added soon :)";

    return (
        <div>
            <h2>Personal Projects</h2>
            <ol>
                <li><Project link={link1} title={title1} description={desc1} /></li><br></br>
                <li><Project link={link2} title={title2} description={desc2} /></li><br></br>
                <li><Project link={link3} title={title3} description={desc3} /></li><br></br>
                <li><Project link={link4} title={title4} description={desc4} /></li><br></br>
            </ol>
        </div>
    );
}

export default Projects;