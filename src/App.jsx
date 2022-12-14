import { useState } from 'react'
import Form from './component/Form'
const App = () => {
  const [count, setCount] = useState(0)
  const [emitted,setEmitted] = useState(false)
  const [message, setMessage] = useState('')

  const benefitted = ()=>{
    setEmitted(true)
  }
  // console.log(emitted)
  return (
    <div className="justify-center bg-green-900 h-screen items-center font-bold flex">
      <div>
        <div className='text-xl font-bold italic'>Send to my child</div>
        <input className='text-lg' type="text" onChange={(e)=>setMessage(e.target.value)} />
      </div>
      <Form emits={()=>console.log("am here")} message={message}></Form>
     
    </div>
  )
}

export default App
