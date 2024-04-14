interface Props{
    title: string
}

function Title(props: Props) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}

export default Title;