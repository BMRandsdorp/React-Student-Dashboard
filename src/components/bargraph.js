import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLine,
} from "victory";

function BarGraph() {
  const AssignmentData = useSelector((state) => state.base);

  const chartData = AssignmentData.map((data) => {
    return {
      name: data.Name,
      assignment: data.Assignment,
      difficult: data.Difficultygrade,
      fun: data.Fungrade,
    };
  });
  // Averages for option 3 line chart
  const chartDifficultAverage = [
    ...chartData.reduce(
      (map, { assignment, difficult }) =>
        map.set(assignment, [...(map.get(assignment) || []), difficult]),
      new Map()
    ),
  ].map(([assignment, difficult]) => ({
    assignment,
    difficult: difficult.reduce((sum, val) => sum + val, 0) / difficult.length,
  }));
  const chartFunAverage = [
    ...chartData.reduce(
      (map, { assignment, fun }) =>
        map.set(assignment, [...(map.get(assignment) || []), fun]),
      new Map()
    ),
  ].map(([assignment, fun]) => ({
    assignment,
    fun: fun.reduce((sum, val) => sum + val, 0) / fun.length,
  }));

  return (
    <div>
      <h2> Average grades </h2>
      <div className="descriptive-text">
        Below you can see the average grades for each assignment
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
          <VictoryGroup colorScale={["green", "red"]}>
            <VictoryLine
              data={chartDifficultAverage}
              x="assignment"
              y="difficult"
            />
            <VictoryLine data={chartFunAverage} x="assignment" y="fun" />
          </VictoryGroup>
          <VictoryAxis
            dependentAxis
            label="Grade"
            tickValues={[0, 1.0, 2.0, 3.0, 4.0, 5.0]}
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
    </div>
  );
}

export default BarGraph;
