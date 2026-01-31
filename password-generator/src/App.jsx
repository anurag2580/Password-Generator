import {useState} from 'react'
function App() {
  const[length,setlength] = useState(10);
  const[includeUpperCase,setincludeUpperCase] = useState(false);
  const[isNumberAllowed,setisNumberAllowed] = useState(false);
  const[isCharAllowed,setisCharAllowed] = useState(false);
  const [password,setpassword] = useState("")

  return (
    <>
    <h1 className="text-3xl text-center text-red-500">Password Generator</h1>
    </>
  )
}

export default App
