import { Api, HttpClient } from "./Api";

const http = new HttpClient({baseUrl: 'http://localhost:4000/api'});
export const api = new Api(http);