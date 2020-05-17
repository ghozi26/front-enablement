export const dataBarChart = {
  labels: ["Total KPI"],
  datasets: [
    {
      label: "Funding",
      backgroundColor: "#AF7",
      data: [12000],
    },
    {
      label: "Funding NTB",
      backgroundColor: "#FA4",
      data: [19000],
    },
    {
      label: "NTB CASA",
      backgroundColor: "#FF7",
      data: [3000],
    },
    {
      label: "xx",
      backgroundColor: "#2A7",
      data: [17000],
    },
    {
      label: "Non Financial",
      backgroundColor: "#f50057",
      data: [28000],
    },
  ],
};

export const dataPieChart = {
  labels: ["Funding NTB", "Total Funding", "Fee Income", "NTB CASA"],
  datasets: [
    {
      backgroundColor: ["#AF7", "#FA4", "#FF7", "#2A7", "#f50057"],
      data: ["138892789", "648688679", "", "1"],
    },
  ],
};

// export const dataPieChart = {
//   labels: ["Funding", "Funding NTB", "NTB CASA", "xx", "Non Financial"],
//   datasets: [
//     {
//       backgroundColor: [
//         "#2ecc71",
//         "#3498db",
//         "#f50057",
//         "#9b59b6",
//         "#f1c40f",
//       ],
//       data: [12, 19, 3, 17, 28],
//     },
//   ],
// };
