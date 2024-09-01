import axios from 'axios';
const api = axios.create({
 baseURL: 'http://localhost:3001'
});
export const getLivros = () => api.get('/livros');
export const getLivrosbyid = (id: string) => api.get(`/livros/${id}`);
export const createLivros = (product: any) => api.post('/livros', product);
export const updateLivros = (id: string, product: any) => api.put(`/livros/${id}`, product);
export const deleteLivro = (id: string) => api.delete(`/livros/${id}`);
