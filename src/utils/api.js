import axios from 'axios';

const handlePromiseError = error => console.log(`Error: ${error}`);

const processApiResponse = ({ response, successCode, errorMessage }) => ({
    data: response.data,
    error: response.status === successCode ? null : errorMessage,
    status: response.status
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

export const deleteCardHero = id =>
    axios
        .delete(`http://localhost:3001/heroes/${id}`)
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while deleting',
            }),
        )
        .catch(handlePromiseError);

export const addCardHero = hero =>
    axios
        .post('http://localhost:3001/heroes/', hero)
        .then(response =>
        processApiResponse({
            response,
            successCode: 201,
            errorMessage: 'Error while adding',
        }),
        )
        .catch(handlePromiseError);

export const addToSquad = squad =>
    axios
        .post('http://localhost:3001/squads/', squad)
        .then(response =>
        processApiResponse({
            response,
            successCode: 201,
            errorMessage: 'Error while adding',
        }),
        )
        .catch(handlePromiseError);

export const fetchAllSquads = () =>
    axios
        .get('http://localhost:3001/squads')
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while fetching',
            }),
        )
        .catch(handlePromiseError);

export const deleteSquad = id =>
    axios
        .delete(`http://localhost:3001/squads/${id}`)
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while deleting',
            }),
        )
        .catch(handlePromiseError);