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
    weighted: "80%",
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