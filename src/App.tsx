import { useState, useEffect, useRef } from "react";
import Form from "./components/Form";
import Image from "./components/Image";
import Confirmation from "./components/Confirmation";

function App() {
	const [error, setError] = useState<{ [key: string]: string }>({});
	const [data, setData] = useState({
		name: "",
		number: "",
		cvc: "",
		MM: "",
		YY: "",
	});
	const [view, setView] = useState<boolean>(true);

	return (
		<div className="main md:grid md:grid-cols-[400px_minmax(500px,_1fr)] h-screen">
			<div>
				<Image
					src="bg-main-desktop.png"
					srcSet="bg-main-desktop.png 1x, bg-main-mobile.png 2x"
          sizes="(min-width: 1024px) 1024px, 100vw"
				/>
				<div className="card-front">
					<div className="animater" data-v-8fcb32d4>
						<img src="/card-logo.svg" alt="icon" className="icon opacity-100" />
						<label
							className="number"
							htmlFor="number"
							typeof="number"
							data-v-8fcb32d4
						>
							{!data.number ? "0000 0000 0000 0000" : `${data.number}`}
						</label>
						<label className="name" htmlFor="cardHolder" data-v-8fcb32d4="">
							{!data.name ? "Jane Appleseed" : data.name}
						</label>
						<label className="expiry" htmlFor="expiryMonth" data-v-8fcb32d4="">
							{data.MM && data.YY ? `${data.MM}/${data.YY}` : "00/00"}
						</label>
					</div>
				</div>
				<div className="card-back" data-v-908f8694>
					<div>
						<img src="bg-card-back.png" alt="main" className="" />
						<label className="cvc" htmlFor="cvc" data-v-908f8694="">
							000
						</label>
					</div>
				</div>
			</div>
			{view ? <Form data={data} setData={setData} error={error} setError={setError} setView={setView} /> : <Confirmation/>}
		</div>
	);
}

export default App;
