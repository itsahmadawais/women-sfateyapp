import axios from 'axios';

var instance = axios.create({
    baseURL: 'https://itsahmadawais.com/api/'
});

export default instance;