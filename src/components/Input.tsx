interface Props {
	ref?: React.RefObject<HTMLInputElement>;
	value: string;
	name: string;
	id: string;
	type: string;
	placeholder: string;
	className: string;
	maxLength: number;
	onChange: (e: any) => void;
	onKeyDown: (e: any) => void;
}

function Input(props: Props) {
	return (
		<div>
			<input
				className={props.className}
				value={props.value}
				ref={props.ref}
				name={props.name}
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={props.onChange}
				maxLength={props.maxLength}
				onKeyDown={props.onKeyDown}
			/>
		</div>
	);
}
export default Input;
