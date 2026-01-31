import {useState,useCallback,useEffect, useRef} from 'react'

function App() {
  const [length,setlength] = useState(10);
  const [includeUpperCase,setincludeUpperCase] = useState(false);
  const [isNumberAllowed,setisNumberAllowed] = useState(false);
  const [isCharAllowed,setisCharAllowed] = useState(false);
  const [password,setpassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    const copy01 = passwordRef.current?.setSelectionRange(0, passwordRef.current.value.length)
    navigator.clipboard.writeText(copy01)},[password])

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if(includeUpperCase){
      str += "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    }
    if(isNumberAllowed){
      str += "0123456789";
    }
    if(isCharAllowed){
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for(let i=0;i<length;i++){
      let charIndex = Math.floor(Math.random()*str.length);
      pass += str.charAt(charIndex)
    }
    setpassword(pass)

  },[length,includeUpperCase,isNumberAllowed,isCharAllowed])

  useEffect(() =>{
    passwordGenerator()
  },[length,includeUpperCase,isNumberAllowed,isCharAllowed])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-700 bg-gray-600 p-6'>
      <h1 className='text-2xl font-bold text-center py-4'>Password Generator</h1>
      <div className='flex rounded-xl shadow-md overflow-hidden mb-4'>
        <input 
        type="text" 
        name="password"
        id="password"
        ref={passwordRef}
        value={password}
        className="w-full p-2 bg-gray-800 text-white rounded-l-lg focus:outline-none my"
        />
        <button 
        onClick={copyPasswordToClipBoard}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg">Copy</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            name="length"
            min={10}
            max={80}
            value={length}
            onChange={(e)=>setlength(e.target.value)}
            className="w-full cursor-pointer"
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            name="uppercase" 
            id="uppercase"
            defaultChecked = {includeUpperCase}
            onChange = {()=>{setincludeUpperCase((prev) => !prev)}}
            />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            name="numbers" 
            id="numbers" 
            defaultChecked = {isNumberAllowed}
            onChange={()=>setisNumberAllowed((change => !change))}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            name="characters" 
            id="characters" 
            defaultChecked = {isCharAllowed}
            onChange={()=>setisCharAllowed(change => !change)}
            />
            <label htmlFor="characters">Include Symbols</label>
          </div>
        </div>
          
      </div>
    </>
  )
}
export default App
