import { IconCheck } from "./Icon";
import Title from "./Title";


function Confirmation(  ) {
    return (
        <div className="flex flex-col gap-5 place-content-center items-center">
            <IconCheck />
            <Title title="THANKS YOU" className="text-xl text-colorPrimary uppercase tracking-wide font-semibold mb-2"/>
            <p>We've added you card details</p>
        </div>
    );
}

export default Confirmation;
