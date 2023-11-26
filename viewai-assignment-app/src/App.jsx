import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  const [dataFromAPI, setDataFromAPI] = React.useState(false);
  console.log(dataFromAPI);
  async function fetchDataFromAPI(){
    console.log('its working');
    const response = await fetch('https://randomuser.me/api/?results=20');
    const Data = await response.json();
    console.log(Data);
    setDataFromAPI(Data);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ViewAI Frontend Engineer - Intern Position</h1>
      <div className="card">
        <button onClick={fetchDataFromAPI}>
          Click Here to Fetch Data from the API!
        </button>
{/*         <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {dataFromAPI && <p className="read-the-docs">
        We've got the Data from the API!
      </p>}
      {dataFromAPI && <DisplayData/>}
    </>
  )
}

export default App
