

function App() {
  return (
    <div className="grid grid-rows-1">
      <div>
      <img src="/bg-main-mobile.png" alt="main" className="w-full cards"/>
      <img src="bg-card-front.png" alt="main" className="animater card-front" />
      <img src="bg-card-back.png" alt="main" className=" card-back" />
      </div>
      <form className=" mt-[100px] mx-5 mb-[50px]">
        <div className="flex flex-col mb-[27px]">
        <label >CARDHOLDER NAME</label>
        <input type="text" placeholder="e.g. Jane Appleseed" className="border rounded-md text-lg font-normal"/>
        </div>
        <div className="flex flex-col mb-[27px]">
        <label htmlFor="">CARD NUMBER</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" className="border rounded-md text-lg font-normal"/>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-[27px]">
        <div className="flex flex-col">
        <label htmlFor="">EXP. DATE (MM/YY)</label>
        <div className="flex gap-2">
        <input type="text" className="w-1/2 border rounded-md text-lg font-normal" placeholder="MM" />
        <input type="text" className="w-1/2 border rounded-md text-lg font-normal" placeholder="YY" />
        </div>
        </div>
        <div className="flex flex-col">
        <label htmlFor="">CVC</label>
        <input type="text" className="border rounded" placeholder="e.g. 123" />
        </div>
        </div>
        <button className="py-[13.5px] px-[18px] rounded bg-bgButton text-white w-full">Confirm</button>
      </form>
    </div>
  );
}

export default App;
