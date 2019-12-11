import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

function WeatherGrid(props) {


  const [winner, setWinner] = useState('nobody');
  const {data} = props;

  const attributeToText = {
    "WDF2": 'Fastest 2 Minute Wind (degrees)',
    "WDF5": 'Fastest 5 Minute Wind (degrees)',
    "WSF2": 'Fastest 2 Minute Wind (m^-1/sec)',
    "WSF5": 'Fastest 5 Minute Wind (m^-1/sec)',
    "average_wind_speed": "Average Wind Speed",
    "has_fog": 'Fog',
    "has_heavy_fog": 'Heavy Fog',
    "has_smoke": 'Smoke',
    "has_thunder": 'Thunder',
    "max_temp": 'Max Temperature',
    "min_temp": 'Min Temperature',
    "peak_gust_time": 'Peak Gust Time',
    "precipitation": 'Precipitation'
  }

  const [columnDefs] = useState(
    [
      {
        headerName: "Attribute Name", field: "attribute"
      }, {
        headerName: "Yale", field: "Yale"
      }, {
        headerName: "Harvard", field: "Harvard"
      }, {
        headerName: 'Who Won?', field: 'winner'
      }
    ]
  );

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };


  const fixDataShape = (data) => {
    let rowData = [];
    if(Object.keys(data).length === 0) return rowData;

    const schools = Object.keys(data);
    const attributes = Object.keys(data[schools[0]]);

    for(let i = 0; i < attributes.length; i++) {
      let temp = {};
      temp['attribute'] = attributeToText[attributes[i]]
      for(let j=0; j < schools.length; j++) {
        temp[schools[j]] = data[schools[j]][attributes[i]];
      }
      rowData.push(temp);
    }

    const newData = rowData.map( (row) => {
      let newRow = Object.assign({},row);
      switch(row.attribute) {
        case 'Fastest 2 Minute Wind (degrees)':
        case 'Fastest 5 Minute Wind (degrees)':
        case 'Fastest 2 Minute Wind (m^-1/sec)':
        case 'Fastest 5 Minute Wind (m^-1/sec)':
        case 'Precipitation':
        case 'Peak Gust Time':
        case 'Average Wind Speed':
          if(parseFloat(row['Yale']) <= parseFloat(row['Harvard'])){
            newRow['winner'] = 'Yale';
          }
          else {
            newRow['winner'] = 'Harvard';
          }
          break;
        case 'Max Temperature':
        case 'Min Temperature':
          if(Math.abs(parseFloat(row['Yale']) - 70) <= Math.abs(parseFloat(row['Harvard']) - 70)) {
            newRow['winner'] = 'Yale';
          }
          else {
            newRow['winner'] = 'Harvard';
          }
          break;
        case 'Smoke':
        case 'Thunder':
        case 'Fog':
        case 'Heavy Fog':
          if(row['Yale'] === 'false') {
            newRow['winner'] = 'Yale';
          }
          else if(row['Yale'] === 'true' && row['Harvard'] === 'true') {
            newRow['winner'] = 'Yale';
          }
          else {
            newRow['winner'] = 'Harvard';
          }
          break;
        default:
          newRow['winner'] = 'Yale';
      }

      return newRow;
    });


    let counter = 0;
    for (let index = 0; index < newData.length; index++) {
      if (newData[index]['winner'] === 'Yale') {
        counter += 1;
      }
      
    }

    if(counter >= 7) {
      if ( winner !== 'Yale') setWinner("Yale");

    } else if (winner !== 'Harvard') {
      setWinner("Harvard");
    }




    return newData;
  }
  return (
    <div 
        className="ag-theme-balham weather-grid"
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={fixDataShape(data)}
          modules={AllCommunityModules}
          onGridReady={onGridReady}>
        </AgGridReact>
        { winner !== "nobody" && 
        <div
          className="winner-bar"
        >
          And the day winner is 
          <section><img style={{width: 100, height: 100}}src={`/images/${winner}.png`} alt='Failed to Load'/></section>
        </div>
        }
      </div>
  );
}

export default WeatherGrid;
