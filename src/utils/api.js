/* eslint-disable */

import axios from 'axios';

const handlePromiseError = error => console.log(`Error: ${error}`);

const processApiResponse = ({ response, successCode, errorMessage }) => ({
    data: response.data,
    error: response.status === successCode ? null : errorMessage,
});

export const fetchAllCards = () =>
    axios
        .get('http://localhost:3001/heroes')
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while fetching',
            }),
        )
        .catch(handlePromiseError);

export const a = 1