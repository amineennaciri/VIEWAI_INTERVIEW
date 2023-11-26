import React from 'react';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  const [dataFromAPI, setDataFromAPI] = React.useState(false);

  async function fetchDataFromAPI(){
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const Data = await response.json();
      setDataFromAPI(Data.results);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setDataFromAPI('Error');
    }
  }

  return (
    <>
      <h1>ViewAI Frontend Engineer - Intern Position</h1>
      <div className="card">
        <button onClick={fetchDataFromAPI}>
          Click Here to Fetch Data from the API!
        </button>
      </div>
      {dataFromAPI==='Error' && <h1>Error Fetching Data!</h1>}
      {dataFromAPI && dataFromAPI!='Error' &&
       <DisplayData dataFromAPI={dataFromAPI}/>}
    </>
  )
}

export default App
