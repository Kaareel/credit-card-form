interface Props {
	title: string;
	className: string;
}

function Title(props: Props) {
	return <h1 className={props.className}>{props.title}</h1>;
}

export default Title;
