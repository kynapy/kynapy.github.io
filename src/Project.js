function Project(props) {
    return (
        <div>
            <a href={props.link}>{props.title}</a>{": "+ props.description}
        </div>
    )
}

export default Project;