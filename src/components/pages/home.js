import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryZoomContainer,
} from "victory";
import BarGraph from "../bargraph";
import NameListCheck from "../namelist";

function BarChart() {
  let AssignmentData = useSelector((state) => state.assignment);
  const chartData = AssignmentData.map((data) => {
    return {
      name: data.Name,
      assignment: data.Assignment + " " + data.Name,
      difficult: data.Difficultygrade,
      fun: data.Fungrade,
    };
  });

  return (
    <div>
      <h1>Student assignment evaluations </h1>
      <div className="descriptive-text">
        Below you can see the grades students gave each assignment, green for
        fun and red for difficult.
      </div>
      <div className="chartcontainer">
        <div className="descriptive-text">
          Click and drag the mouse from left to right to see more results.
        </div>
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
              barWidth={4}
            />
            <VictoryBar data={chartData} x="assignment" y="fun" barWidth={4} />
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
      <NameListCheck />
      <BarGraph />
    </div>
  );
}

export default BarChart;
