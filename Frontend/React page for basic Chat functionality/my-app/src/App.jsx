import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatApp from './component/chatapp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatApp></ChatApp>
    </>
  )
}

export default App
