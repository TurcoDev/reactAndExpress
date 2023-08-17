import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const url = "/api";
  const [count, setCount] = useState(0)
  const [dataV1, setDataV1] = useState(null)

  function getDataFromServer() {
    fetch(url+"/v1")
      .then(response => response.json() )
      .then(data => {
        console.log(data); 
        setDataV1(data.message)
       })
  }

  return (
    <>
      <p>{ dataV1 }</p>
      <button onClick={ getDataFromServer }>
        Obtener Mensaje del server
      </button>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
