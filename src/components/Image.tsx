interface Props {
    src: string;
    srcSet: string
}

function Image(props: Props) {
    return (<img src={props.src} srcSet={props.srcSet} alt="main" className="w-full h-full" />)
}

export default Image;