import React from 'react';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  const [dataFromAPI, setDataFromAPI] = React.useState(false);

  /* async function fetchDataFromAPI(){
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const Data = await response.json();
      setDataFromAPI(Data.results);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setDataFromAPI('Error');
    }
  } */
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  console.log(data);
  React.useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=20`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.results);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    if (dataFromAPI) {
      fetchDataFromAPI();
    }
  }, [dataFromAPI])

  return (
    <>
      <h1>ViewAI Frontend Engineer - Intern Position</h1>
      <div className="card">
        <button onClick={()=>{setDataFromAPI(true)}}>
          Click Here to Fetch Data from the API!
        </button>
      </div>
      {dataFromAPI==='Error' && <h1>Error Fetching Data!</h1>}
      {data && dataFromAPI!='Error' &&
       <DisplayData data={data}/>}
    </>
  )
}

export default App
