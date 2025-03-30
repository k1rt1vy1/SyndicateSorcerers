import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import ChatApp from './component/chatapp'
import Chatbot from './component/Chatbot/Chatbot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chatbot></Chatbot>
    </>
  )
}

export default App
