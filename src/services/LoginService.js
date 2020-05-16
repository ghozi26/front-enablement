import {server, config} from '../utils/Server'
import Axios from 'axios'


const LoginService = async(salesCode) => {
  const URL = `${server}incentiveapi/api/Frontliner/login`
  // const URL = `https://reactnative.dev/movies.json`
  // const URL = `https://reqres.in/api/users?page=2`
  const response = await Axios.get(URL, {
    params: {
      salesCode,
    },
  },
)
  return response;
}

export default LoginService