import { useState } from "react"

const App = () => {

    const [ state, setState ] = useState("")

    return (
        <div id="App" className="flex items-center justify-center min-h-[100vh] flex-col">
            <div className="bg-gray-900 p-2 rounded-lg">

                <div>
                    <input value={state} disabled={true} type="text" className="pl-4 text-white text-xl rounded font-medium m-2 w-[285px] h-[50px] focus:!outline-none" />
                </div>

                <div>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"7")}>7</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"8")}>8</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"9")}>9</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"/")}>/</button>
                </div>

                <div>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"4")}>4</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"5")}>5</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"6")}>6</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"*")}>*</button>
                </div>

                <div>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"1")}>1</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"2")}>2</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"3")}>3</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"-")}>-</button>
                </div>

                <div>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"0")}>0</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+".")}>.</button>
                    <button className="bg-white p-6 m-2 rounded font-medium text-lg hover:bg-gray-100" onClick={()=>setState(state+"+")}>+</button>
                    <button onClick={()=>setState(eval(state))} className="text-white p-6 m-2 bg-orange-500 rounded font-medium text-lg hover:bg-orange-400">=</button>
                </div>

                <div>
                    <button onClick={()=>setState("")} className="bg-red-500 p-4 w-[275px] hover:bg-red-600 text-white text-lg m-2 rounded font-medium">AC</button>
                </div>

            </div>
        </div>
    )
}

export default App
