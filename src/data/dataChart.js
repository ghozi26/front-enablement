export const dataBarChart = {
  labels: ["Total KPI"],
  datasets: [
    {
      label: "Funding",
      backgroundColor: "#AF7",
      data: [12],
    },
    {
      label: "Funding NTB",
      backgroundColor: "#FA4",
      data: [19],
    },
    {
      label: "NTB CASA",
      backgroundColor: "#FF7",
      data: [3],
    },
    {
      label: "xx",
      backgroundColor: "#2A7",
      data: [17],
    },
    {
      label: "Non Financial",
      backgroundColor: "#f50057",
      data: [28],
    },
  ],
};

export const dataPieChart = {
  labels: ["Funding", "Funding NTB", "NTB CASA", "xx", "Non Financial"],
  datasets: [
    {
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#f50057",
        "#9b59b6",
        "#f1c40f",
      ],
      data: [12, 19, 3, 17, 28],
    },
  ],
};
