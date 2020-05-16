

export const sampleData = [
  {
    id: "0",
    kpi: "Financial",
    space: "-",
    weighted: "-",
    baseline: "-",
    actual: "-",
    target: "-",
    gap: "-",
    incentive: "-",
    child1:false
  },
  {
    id: "1",
    kpi: "Portofolio",
    space: "-",
    weighted: "90%",
    baseline: "-",
    actual: "-",
    target: "-",
    gap: "-",
    incentive: "-",
    child1:[
      {
        title1:'Total Funding',
        weighted1 : '30%',
        baseline1 : '143.400.000',
        actual1 : '145.400.000',
        target1 : '166.000.000',
        gap1 : '20.500.000',
        incentive1 : '600.000',
        child2:[
          {
            title2: 'CASA Core',
            actual2: '1.000.000',
            child3:[
              {title3 : 'Super Combo', actual3:'1.000.000'},
              {title3 : 'Giro Premium', actual3:'1.000.000'},
              {title3 : 'other CASA IDR', actual3:'1.000.000'}
            ]
          },
          {
            title2: 'CASA Non Core',
            actual2: '1.000.000',
            child3:'false'
          },
          {
            title2: 'CASA FCY',
            actual2: '1.000.000',
            child3:false
          },
          {
            title2: 'Time Deposit',
            actual2: '1.000.000',
            child3:false
          }
        ]
      },
      {
        title1:'Total Funding NTB',
        weighted1 : '20%',
        baseline1 : '5.500.000',
        actual1 : '15.500.000',
        target1 : '166.000.000',
        gap1 : '20.500.000',
        incentive1 : '600.000',
        child2:[
          {
            title2: 'CASA Core',
            actual2: '1.000.000',
            child3:false
          },
          {
            title2: 'CASA Non Core',
            actual2: '1.000.000',
            child3:false
          },
          {
            title2: 'CASA FCY',
            actual2: '1.000.000',
            child3:false
          },
          {
            title2: 'Time Deposit',
            actual2: '1.000.000',
            child3:false
          }
        ]
      }
    ]
  },
  {
    id: "2",
    kpi: "Acquisition",
    space: "-",
    weighted: "-",
    baseline: "-",
    actual: "-",
    target: "-",
    gap: "-",
    incentive: "-",
    child1:[
      {
        title1:'NTB CASA',
        weighted1 : '30%',
        baseline1 : '143.400.000',
        actual1 : '145.400.000',
        target1 : '166.000.000',
        gap1 : '20.500.000',
        incentive1 : '600.000',
        child2: false
      },
      {
        title1:'Free Income and X-sell',
        weighted1 : '20%',
        baseline1 : '5.500.000',
        actual1 : '15.500.000',
        target1 : '166.000.000',
        gap1 : '20.500.000',
        incentive1 : '600.000',
        child2: false
      }
    ]
  },
  {
    id: "3",
    kpi: "Non Financial",
    space: "-",
    weighted: "20%",
    baseline: "-",
    actual: "-",
    target: "-",
    gap: "-",
    incentive: "-",
    child1:false
  },
];

// export const sampleData = [
//   {
//     id: "0",
//     kpi: "Financial",
//     space: "-",
//     weighted: "80",
//     baseline: "-",
//     actual: "-",
//     target: "-",
//     gap: "-",
//     incentive: "-",
//     child1: false,
//     FK_Parent_ID: 0,
//     PK_KPI_ID: 3,
//   },
//   {
//     id: "1",
//     kpi: "Portofolio",
//     space: "-",
//     weighted: "",
//     baseline: "-",
//     actual: "-",
//     target: "-",
//     gap: "-",
//     incentive: "-",
//     // child1: null,
//     child1: [
//       {
//         title1: "Total Funding",
//         weighted1: "15",
//         baseline1: "266846143.494706",
//         actual1: "266846143.494706",
//         target1: "13342307.1747353",
//         gap1: "253503836.319971",
//         incentive1: "",
//         child2: false,
//         PK_KPI_ID: "7",
//       },
//       {
//         title1: "Funding NTB",
//         weighted1: "20",
//         baseline1: "248714921.356471",
//         actual1: "248714921.356471",
//         target1: "12435746.0678235",
//         gap1: "236279175.288647",
//         incentive1: "0",
//         child2: false,
//         PK_KPI_ID: "8",
//       },
//     ],
//     FK_Parent_ID: 3,
//     PK_KPI_ID: 5,
//   },
//   {
//     id: "2",
//     kpi: "Aquisction",
//     space: "-",
//     weighted: "",
//     baseline: "-",
//     actual: "-",
//     target: "-",
//     gap: "-",
//     incentive: "-",
//     // child1: false,
//     child1: [
//       {
//         title1: "NTB CASA",
//         weighted1: "20",
//         baseline1: "0",
//         actual1: "",
//         target1: "0",
//         gap1: "0",
//         incentive1: "0",
//         child2: null,
//         PK_KPI_ID: "9",
//       },
//       {
//         title1: "Fee Income",
//         weighted1: "",
//         baseline1: "0",
//         actual1: "",
//         target1: "0",
//         gap1: "0",
//         incentive1: "0",
//         child2: null,
//         PK_KPI_ID: "10",
//       },
//     ],
//     FK_Parent_ID: 3,
//     PK_KPI_ID: 6,
//   },
//   {
//     id: "3",
//     kpi: "Non Financial",
//     space: "-",
//     weighted: "20",
//     baseline: "-",
//     actual: "-",
//     target: "-",
//     gap: "-",
//     incentive: "-",
//     child1: false,
//     FK_Parent_ID: 0,
//     PK_KPI_ID: 4,
//   },
// ];
