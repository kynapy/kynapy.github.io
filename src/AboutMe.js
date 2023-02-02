function AboutMe() {
    const pad = {
        float:"left",
        marginRight:"20px"
    };
    return (
        <div style={{marginBottom:"85px"}}>
            <h2>About Me</h2>
            <img src={"./kynapy.png"} width="200px" style={pad} alt="Kiyan"></img>
            <div>Hello! My name is Kiyan, and I'm currently in my final year in the National University of 
      Singapore (NUS), studying Life Sciences with a second minor in Computer Sciences. I have 
      always had an interest in Biology since young, and have always been good in using 
      technology and devices, always solving IT issues for my friends and family. Funnily, I 
      never knew there was something called "Computer Sciences" until my second year of 
      university, when I had to take a compulsory CS module. It was that module which allowed 
      me to discover my passion for CS, hence the second minor. I am always looking to learn 
      new things, so advice is always welcome, be it for my projects or my career!<br></br>
            </div>
        </div>
    )
}

export default AboutMe;