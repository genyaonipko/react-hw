import axios from 'axios';

const handlePromiseError = error => console.log(`Error: ${error}`);

const processApiResponse = ({ response, successCode, errorMessage }) => ({
    data: response.data,
    error: response.status === successCode ? null : errorMessage,
    status: response.status
});

export const fetchAllCards = () =>
    axios
        .get('/heroes')
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while fetching',
            }),
        )
        .catch(handlePromiseError);

export const deleteHero = id =>
    axios
        .delete(`/heroes/${id}`)
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while deleting',
            }),
        )
        .catch(handlePromiseError);

export const addHero = hero =>
    axios
        .post('/heroes/', hero)
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
        .post('/squads/', squad)
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
        .get('/squads')
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
        .delete(`/squads/${id}`)
        .then(response =>
            processApiResponse({
                response,
                successCode: 200,
                errorMessage: 'Error while deleting',
            }),
        )
        .catch(handlePromiseError);