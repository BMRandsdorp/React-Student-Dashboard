import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLabel,
} from "victory";
import BarGraph from "./bargraph";
import NameList from "./namelist";

function BarChart() {
  //const dispatch = useDispatch();
  let AssignmentData = useSelector((state) => state.assignment);
  console.log(AssignmentData);
  const chartData = AssignmentData.map((data) => {
    return {
      name: data.Name,
      assignment: data.Assignment + " " + data.Name,
      difficult: data.Difficultygrade,
      fun: data.Fungrade,
    };
  });
  //console.log(chartData);
  let barData = chartData;

  /*const NameListData = useSelector((state) => state.nameList);
  const NamesListed = NameListData.map((name, key) => (
    <li key={key}>
      <input type="checkbox" name={name} value={name} />
      <label htmlFor={name}> {name} </label>
    </li>
  ));
 
  let checkedNames = [];
  let chartDataFiltered = [];
  //if else  chartDataFilter = [] normal bar else new data
  const checkOnChange = (e) => {
    if (e.target.type === "checkbox") {
      const checked = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkedNames = Array.from(checked).map((check) => check.value);
      console.log(checkedNames);
      // use checked names to filter through assignment data
      chartDataFiltered = chartData.filter((item) =>
        checkedNames.includes(item.name)
      );
      console.log(chartDataFiltered);
      barData = chartDataFiltered;
    }
  };
  console.log(barData);*/

  return (
    <div>
      <div>
        Below you can see the grades students gave each assignment, with the
        assignment name and name of the student. You can click and drag from
        left to right to see more results.
      </div>
      <div className="chartcontainer">
        <VictoryChart
          maxDomain={{ y: 5 }}
          theme={VictoryTheme.material}
          width={350}
          height={250}
          containerComponent={
            <VictoryZoomContainer
              zoomDomain={{ x: [0, 10] }}
              minimumZoom={{ x: 10 }}
              allowZoom={false}
              zoomDimension="x"
            />
          }
        >
          <VictoryGroup offset={3} colorScale={["green", "red"]}>
            <VictoryBar
              data={barData}
              x="assignment"
              y="difficult"
              barWidth={3}
            />
            <VictoryBar data={barData} x="assignment" y="fun" barWidth={3} />
          </VictoryGroup>
          <VictoryAxis
            dependentAxis
            label="Grade"
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 8, padding: 30 },
              tickLabels: { fontSize: 8, padding: 5 },
            }}
          />
          <VictoryAxis
            crossAxis
            label="Assignments"
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 8, padding: 40 },
              tickLabels: { fontSize: 5, padding: 15, angle: 20 },
            }}
          />
        </VictoryChart>
      </div>
      <div> Check/uncheck to see each students evaluations </div>

      <NameList />
      <BarGraph />
    </div>
  );
}

export default BarChart;
