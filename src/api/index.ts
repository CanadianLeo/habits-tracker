import { Api, HttpClient } from "./Api";
import { BASE_URL } from "./constants";

const http = new HttpClient({baseUrl: BASE_URL});
export const api = new Api(http);