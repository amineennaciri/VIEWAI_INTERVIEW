import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './DisplayData.css'

function DisplayData({dataFromAPI}){

    return (
        <>
            <h1>Data displayed with success!</h1>
            <table>
              <tbody>
                <tr>
                  <th>city</th>
                  <th>state</th>
                  <th>country</th>
                  <th>postcode</th>
                  <th>number</th>
                  <th>name</th>
                  <th>latitude</th>
                  <th>longitude</th>
                </tr>
                {dataFromAPI.map((el,index)=>(
                    <tr key={index}>
                        <td>{el.location.city}</td>
                        <td>{el.location.state}</td>
                        <td>{el.location.country}</td>
                        <td>{el.location.postcode}</td>
                        <td>{el.location.street.number}</td>
                        <td>{el.location.street.name}</td>
                        <td>{el.location.coordinates.latitude}</td>
                        <td>{el.location.coordinates.longitude}</td>
                    </tr>
                ))}
              </tbody>
            </table>
        </>
    )
}

export default DisplayData