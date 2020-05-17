import {server, config} from '../utils/Server'
import Axios from 'axios'


const PieChartService = async(periodeType='2', periode='04/01/2020', salesCode='M8K') => {
  console.log({periodeType,periode,salesCode})
  const URL = `${server}incentiveapi/api/Frontliner/GetDataPieChart`
  const response = await Axios.get(URL, {
    params: {
      periodeType,
      periode,
      salesCode,
    },
  },
)
  return response;
}

export default PieChartService