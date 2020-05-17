import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import numeral from "numeral";

const BarChart = (props) => {
  const { displayTitle, displayLegend, legendPosition, textTitle, data } = props;

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
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (label, index, labels) {
                    return `${numeral(label).format("0, 0")}`;
                  },
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                console.log({ data, tooltipItem });
                // var dataset = data.datasets[tooltipItem.datasetIndex];
                // var index = tooltipItem.index;
                // return `${data.labels[index]} :   ${numeral(dataset.data[index]).format('0, 0')}`;
                return `${numeral(tooltipItem.yLabel).format("0, 0")}`;
              },
            },
          },
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
