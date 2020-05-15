import {server, config} from '../utils/Server'
import Axios from 'axios'


const BarChartService = async() => {
  const URL = `${server}APIFrontliner/api/Frontliner/GetDataBarChart`
  // const URL = `https://reactnative.dev/movies.json`
  // const URL = `https://reqres.in/api/users?page=2`
  const response = await Axios.get(URL)
  return response;
}

export default BarChartService