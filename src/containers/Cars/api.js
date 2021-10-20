import axios from 'axios';
import { CARS_API } from 'consts';

export const apiGetMakes = () => {
  return axios.get(`${CARS_API}/vehicles/getallmanufacturers?format=json`);
};
