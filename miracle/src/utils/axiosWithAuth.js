import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        // baseURL: 'https://lindseyacason-miraclemessages.herokuapp.com',
        headers: {
            Authorization: `Bearer ${token}`,
         
        }
    });
};


export const axiosWithAuthLogin = () => {
    
    return axios.create({

        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            // Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
         
            //   'Content-Type': 'application/x-www-form-urlencoded'
        },
        // baseURL: 'https://lindseyacason-miraclemessages.herokuapp.com',
    });
}