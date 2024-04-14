
import Input from "../components/Input";
import Title from "../components/Title";
import { validate } from "../utils/helpers";

interface CardData {
    name: string;
    number: string;
    cvc: string;
    MM: string;
    YY: string;
}

interface Props {
    data: CardData
    setData: React.Dispatch<React.SetStateAction<CardData>>
    error: { [key: string]: string }
    setError: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
}

function Form(props: Props) {

    const onlyWords = (e: any) => {
        const value = e.key;
        if (!/^[a-zA-Z ]+$/.test(value)) {
            e.preventDefault()
        }
    }

    const onlyNumber = (e: any) => {
        const value = e.key;
        if(value === "Backspace" || value === "Delete"){
            return;
        }
        const valueFormatted = Number(value)
        if (!Number.isNaN(valueFormatted) && valueFormatted >= 0 && valueFormatted <= 9){
            return;
        }
        e.preventDefault();
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        let formattedValue = value;
        if (name === "number") {
            formattedValue = value
                .replace(/\D/g, '')
                .replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
        }

        props.setData({ ...props.data, [name]: formattedValue });
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = validate(props.data.name, props.data.number, props.data.MM, props.data.YY, props.data.cvc);
        props.setError(errors);
        if (Object.values(errors).length > 0) {
            return;
        }
    };
    return (
        <form onSubmit={handleSubmit} className=" mt-[100px] mx-5 mb-[50px] md:mt-0 md:mx-0 md:mb-0 md:grid md:place-content-center ">
            <div className="flex flex-col mb-[27px]">
                <Title title="CARDHOLDER NAME" />
                <Input
                    name="name"
                    value={props.data.name}
                    id="cardHolder"
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    className="w-full border rounded-md text-lg font-normal"
                    onChange={handleInputChange}
                    onKeyDown={onlyWords}
                    maxLength={36} />
                {props.error.name && <span className="text-red-500 ">{props.error.name}</span>}
            </div>
            <div className="flex flex-col mb-[27px]">
                <Title title="CARD NUMBER" />
                <Input
                    name="number"
                    value={props.data.number}
                    id="number"
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000"
                    className="w-full border rounded-md text-lg font-normal"
                    onChange={handleInputChange}
                    onKeyDown={onlyNumber}
                    maxLength={19} />
                {props.error.number && <span className="text-red-500 ">{props.error.number}</span>}
            </div>
            <div className="flex flex-row mb-[27px] gap-2">
                <div>
                    <Title title="EXP. DATE(MM/YY)" />
                    <div className="flex flex-row gap-2">
                        <Input
                            name="MM"
                            value={props.data.MM}
                            id="expiryMonth"
                            type="text"
                            placeholder="MM"
                            className=" w-[82px] border rounded-md text-lg font-normal"
                            onChange={handleInputChange}
                            onKeyDown={onlyNumber}
                            maxLength={2} />
                        <Input
                            name="YY"
                            value={props.data.YY}
                            id="expiryYear"
                            type="text"
                            placeholder="YY"
                            className="w-[82px] border rounded-md text-lg font-normal"
                            onChange={handleInputChange}
                            onKeyDown={onlyNumber}
                            maxLength={2} />
                    </div>
                    {(props.error.MM || props.error.YY) && <span className="text-red-500 ">{props.error.MM || props.error.YY}</span>}
                </div>
                <div className="flex flex-col">
                    <Title title="CVC" />
                    <Input
                        name="cvc"
                        value={props.data.cvc}
                        id="cvc"
                        type="text"
                        placeholder="e.g. 123"
                        className="w-[175px] border rounded"
                        onChange={handleInputChange}
                        maxLength={3}
                        onKeyDown={onlyNumber} />
                    {props.error.cvc && <span className="text-red-500 ">{props.error.cvc}</span>}
                </div>
            </div>
            <button className="py-[13.5px] px-[18px] rounded bg-bgButton text-white w-full">Confirm</button>
        </form>
    )
}

export default Form;