import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MyTunes</h1>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png' alt='taylor swift' width={200} height={250} />
        <div>
          <h3>Taylor Swift's albums</h3>
        </div>
      </div>
    </>
  )
}

export default App
