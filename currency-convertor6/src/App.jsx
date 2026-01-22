import { useState } from 'react'
import { Inputbox } from './components'
import useCurrency from './hooks/useCurrency'
import bgimg from "./assets/bg.webp";


function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertamount, setconvertamount] = useState(0)

const currencyinfo=useCurrency(from)
const options=Object.keys(currencyinfo)
const swap=()=>{
  setfrom(to)
  setto(from)
  setamount(convertamount)
  setconvertamount(amount)
}
const convert=()=>{
  setconvertamount(amount*currencyinfo[to])
}
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor: "maroon" }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                selectcurrency={from}
                                onchangeamount={(amount)=>setamount(amount)}
                                onchangecurrency={(currency)=>setfrom(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                label="To"
                                amountdisable
                                amount={convertamount}
                                selectcurrency={from}
                                currencyoptions={options}
                                onchangecurrency={(currency)=>setto(currency)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
