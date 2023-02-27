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
  const dispatch = useDispatch();

  const AssignmentData = useSelector((state) => state.assignment);
  //console.log(AssignmentData);
  const chartData = AssignmentData.map((data) => {
    return {
      name: data.Name,
      assignment: data.Assignment + " " + data.Name,
      difficult: data.Difficultygrade,
      fun: data.Fungrade,
    };
  });
  //console.log(chartData);

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
              data={chartData}
              x="assignment"
              y="difficult"
              barWidth={3}
            />
            <VictoryBar data={chartData} x="assignment" y="fun" barWidth={3} />
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
      <div> Filter for more details per student</div>
      <NameList />

      <BarGraph />
    </div>
  );
}

export default BarChart;
