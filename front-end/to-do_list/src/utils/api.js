import axios from "axios";

const API_URL = 'https://e470-93-173-88-189.ngrok.io/api/todos/';

export function getToDos() {
  return axios.get(API_URL)
    .then(res => res.data)
    .catch(err => console.error(err));
}