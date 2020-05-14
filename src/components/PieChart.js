import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

const PieChart = (props) => {
  const {
    data,
  } = props;

  const [dataChart, setDataChart] = useState(data);

  return (
    <div>
      <Pie
        data={dataChart}
        height={100}
      />
    </div>
  );
};

PieChart.defaultProps = {
  textTitle: "Chart Title",
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom",
};

PieChart.propTypes = {
  textTitle: PropTypes.string.isRequired,
  legendPosition: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default PieChart;
