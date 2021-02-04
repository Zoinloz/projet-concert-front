
import axios from "axios"

const url = "http://localhost:8000/";

axios.defaults.headers['Accept'] = 'application/json';

function findAll() {
    return axios.get(url + 'concert').then(response => response.data)
}

function findAllSearch() {
    return axios.get(url + 'event/search').then(response => response.data)
}

function getConcert(id) {
    return axios.get(url + 'concert/' + id).then((response) => response.data)
}

function getEvent(id) {
    return axios.get(url + 'event/' + id).then((response) => response.data)
}

function createConcert(concert) {
    return axios.post(url + 'concert', concert)
        .then((response) => response.data.id);
}

function createEvent(evenement) {
    return axios.post(url + 'event', evenement)
        .then((response) => response.data.id);
}


export default {
    findAll,
    getConcert,
    createConcert,
    getEvent,
    createEvent,
    findAllSearch
}