import { useState } from "react";


function App() {
  const [data, setData] = useState({
    name: "",
    number: "",
    cvc: "",
    MM: "",
    YY: "",
  })
  const [error, setError] = useState<{ [key: string]: string }>({});


  const handleInputChange = (e: any) => {
    console.log("name: ", e.target.name)
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const validate = (name: string, number: string, MM: string, YY: string, cvc: string) => {
    const newError: { [key: string]: string } = {};
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (!data.name) {
      newError.name = "Enter a Card Holder name"
    } if (!data.number) {
      newError.number = "Enter a Credit Card number"
    } else if (data.number.length < 15) {
      newError.number = "Must be 16 digits long"
    } if (!data.MM) {
      newError.MM = "Value is required"
    } else if (Number(data.MM) >= 13) {
      newError.MM = "Enter a valid Month (MM)"
    } if (!data.YY) {
      newError.YY = "Value is required"
    } else if ((Number(data.YY) < currentYear) || (Number(data.YY) == currentYear && Number(data.MM) <= currentMonth)) {
      newError.YY = "Enter a future Year (YY)"
    } if (!data.cvc) {
      newError.cvc = "Value is required"
    }
    return newError
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate(data.name, data.number, data.MM, data.YY, data.cvc);
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
  };
  return (
    <div className="main ">
      <div className="cards">
        <img src="/bg-main-mobile.png" alt="main" className="w-full" />
        <div className="">
          <img src="bg-card-front.png" alt="main" className=" card-front" />
        </div>
        <div className="">
          <img src="bg-card-back.png" alt="main" className=" card-back" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className=" mt-[100px] mx-5 mb-[50px]">
        <div className="flex flex-col mb-[27px]">
          <label >CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="border rounded-md text-lg font-normal"
            onChange={handleInputChange}
            name="name"
            onKeyDown={(e) => {
              const value = e.key;
              if (!/^[a-zA-Z ]+$/.test(value)) {
                e.preventDefault()
              }
            }} />
          {error.name && <span className="text-red-500 ">{error.name}</span>}
        </div>
        <div className="flex flex-col mb-[27px]">
          <label htmlFor="">CARD NUMBER</label>
          <input
            name="number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="border rounded-md text-lg font-normal"
            onChange={handleInputChange}
            maxLength={16}
            onKeyDown={(e) => {
              const value = e.key;
              if (!/^\d+$/.test(value)) {
                e.preventDefault(); // Evitar que se escriban letras
              }
            }} />
          {error.number && <span className="text-red-500 ">{error.number}</span>}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-[27px]">
          <div className="flex flex-col">
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="flex gap-2">
              <input
                name="MM"
                type="text"
                className="w-1/2 border rounded-md text-lg font-normal"
                placeholder="MM"
                onChange={handleInputChange}
                maxLength={2}
                onKeyDown={(e) => {
                  const value = e.key;
                  if (!/^\d+$/.test(value)) {
                    e.preventDefault(); // Evitar que se escriban letras
                  }
                }} />
              <input
                name="YY"
                type="text"
                className="w-1/2 border rounded-md text-lg font-normal"
                placeholder="YY"
                onChange={handleInputChange}
                maxLength={2}
                onKeyDown={(e) => {
                  const value = e.key;
                  if (!/^\d+$/.test(value)) {
                    e.preventDefault(); // Evitar que se escriban letras
                  }
                }}
              />
            </div>
            {(error.MM || error.YY) && <span className="text-red-500 ">{error.MM || error.YY}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">CVC</label>
            <input
              name="cvc"
              type="text"
              className="w-full border rounded"
              placeholder="e.g. 123"
              onChange={handleInputChange}
              maxLength={3}
              onKeyDown={(e) => {
                const value = e.key;
                if (!/^\d+$/.test(value)) {
                  e.preventDefault(); // Evitar que se escriban letras
                }
              }} />
            {error.cvc && <span className="text-red-500 ">{error.cvc}</span>}
          </div>
        </div>
        <button className="py-[13.5px] px-[18px] rounded bg-bgButton text-white w-full">Confirm</button>
      </form>
    </div>
  );
}

export default App;
