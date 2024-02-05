import { apiClient } from "./ApiClient";

export const retrieveAllBooks = () => apiClient.get("/api/books");

export const addBook = (book) => apiClient.post(`/api/add/book`, book);

export const retrieveBook = (id) => apiClient.get(`/api/books/${id}`);


// Jwt Authentication
export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`, { username, password })
