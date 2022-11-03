import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL  //'https://merncalendar-back-end.herokuapp.com/'
});

//Todo: Configurar interceptores.

export default calendarApi;