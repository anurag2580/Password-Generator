import { useState } from 'react'

function App() {
  let [color,setColor] = useState("black")
  return (
    <>
    <div className= "w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center shadow-md bg-white bottom-12 gap-3 inset-x-0 px-2 py-2 rounded-2x1">
        <button className = "outline-none px-4 py-1 rounded-full text-white shadow-1g" style = {{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
        <button className = "outline-none px-4 py-1 rounded-full text-white shadow-1g" style = {{backgroundColor:"green"}} onClick={()=>setColor("green")}>GREEN</button>
        <button className = "outline-none px-4 py-1 rounded-full text-white shadow-1g" style = {{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>BLUE</button>
        <button className = "outline-none px-4 py-1 rounded-full text-white shadow-1g" style = {{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>YELLOW</button>
        <button className = "outline-none px-4 py-1 rounded-full text-white shadow-1g" style = {{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>PURPLE</button>
      </div>
    </div>
    </>
  )
}

export default App
