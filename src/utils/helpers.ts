export const validate = (
	name: string,
	number: string,
	MM: string,
	YY: string,
	cvc: string,
) => {
	const newError: { [key: string]: string } = {};
	const currentYear = new Date().getFullYear() % 100;
	const currentMonth = new Date().getMonth() + 1;
	if (name === "Jane Appleseed") {
		newError.name = "Enter a Card Holder name";
	}
	if (number === "0000 0000 0000 0000") {
		newError.number = "Enter a Credit Card number";
	} else if (number.length < 15) {
		newError.number = "Must be 16 digits long";
	}
	if (MM === "00") {
		newError.MM = "Value is required";
	} else if (Number(MM) >= 13) {
		newError.MM = "Enter a valid Month (MM)";
	}
	if (YY === "00") {
		newError.YY = "Value is required";
	} else if (
		Number(YY) < currentYear ||
		(Number(YY) === currentYear && Number(MM) <= currentMonth)
	) {
		newError.YY = "Enter a future Year (YY)";
	}
	if (cvc === "000") {
		newError.cvc = "Value is required";
	}
	return newError;
};
