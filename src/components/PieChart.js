import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import numeral from 'numeral'

const PieChart = (props) => {
  const { data } = props;

  const [dataChart, setDataChart] = useState(data);

  return (
    <div>
      <Pie
        data={dataChart}
        height={100}
        options={{
          tooltips:{
            callbacks: {
              label: function(tooltipItem, data) {
                console.log({data, tooltipItem})
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var index = tooltipItem.index;
                return `${data.labels[index]} :   ${numeral(dataset.data[index]).format('0, 0')}`;
              }
            }
          }
        }}
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
