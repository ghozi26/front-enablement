import {server, config} from '../utils/Server'
import Axios from 'axios'


const TableService = async(periodeType='2', periode='04/01/2020', salesCode='M8K') => {
  const URL = `${server}incentiveapi/api/Frontliner/GetDataTable`
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

export default TableService