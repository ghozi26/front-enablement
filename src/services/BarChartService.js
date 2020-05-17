import {server, config} from '../utils/Server'
import Axios from 'axios'


const BarChartService = async(periodeType='2', periode='04/01/2020', salesCode='M8K') => {
  console.log({periodeType,periode,salesCode})
  const URL = `${server}incentiveapi/api/Frontliner/GetDataBarChart`
  // const URL = `https://reactnative.dev/movies.json`
  // const URL = `https://reqres.in/api/users?page=2`
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

export default BarChartService