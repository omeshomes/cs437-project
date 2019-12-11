import React from 'react'
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryArea, VictoryTheme, VictoryAxis, VictoryLine } from 'victory';


function YearLongGrid(props) {
	const {winnerData} = props;
    // increment yale by one if winnerData[i].school == Yale for that day, else increment Harvard
    const transData = (data) => {
      //console.log(data);
      if (data === null || data === undefined  ) return [];

        let newArr = [];
        for (let i = 0; i < data.length; i++) {
            newArr.push({x: i, y: data[i]});
        }
        return newArr;
    }


    return (
        <VictoryChart
            theme={VictoryTheme.material}
        >
      <VictoryLine
        style={{
          data: { stroke: "blue" },
          parent: { border: "1px solid #ccc"}
        }}
        data={transData(winnerData['Yale'])}
      />
    <VictoryLine
        style={{
          data: { stroke: "red" },
          parent: { border: "1px solid #ccc"}
        }}
        data={transData(winnerData['Harvard'])}
      />
    </VictoryChart>

    )
}

export default YearLongGrid;