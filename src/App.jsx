import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const api = 'http://localhost:1337/api/restaurants'

const request = async () => {
  const response = await fetch(api)
  const data = await response.text()
  return data
}

export default function App() {
  const [count, setCount] = useState(2)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => request().then(data => console.log(data))}>fetch</button>      
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}