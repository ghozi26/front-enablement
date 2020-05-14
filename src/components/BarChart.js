import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const BarChart = (props) => {
  const {
    displayTitle,
    displayLegend,
    legendPosition,
    textTitle,
    data,
  } = props;

  const [dataChart, setDataChart] = useState(data);

  return (
    <div>
      <Bar
        data={dataChart}
        height={100}
        options={{
          title: {
            display: displayTitle,
            text: textTitle,
            fontSize: 25,
          },

          legend: {
            display: displayLegend,
            position: legendPosition,
          },
          cutoutPercentage: 80,
          rotation: 120,
        }}
      />
    </div>
  );
};

BarChart.defaultProps = {
  textTitle: "Chart Title",
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom",
};

BarChart.propTypes = {
  textTitle: PropTypes.string.isRequired,
  legendPosition: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default BarChart;
