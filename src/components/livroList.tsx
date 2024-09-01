import { useEffect, useState } from 'react';
import {  getLivros, deleteLivro } from '../services/api';
import { Link } from 'react-router-dom';
interface Livro {
 id: string;
 name: string;
 description: string;
 price: number;
 quantity: number;
}
function LivroList() {
 const [livros, setLivros] = useState<Livro[]>([]);
 useEffect(() => {
 loadLivros();
 }, []);
 const loadLivros = async () => {
 const response = await getLivros();
 setLivros(response.data);
 };
 const handleDelete = async (id: string) => {
 await deleteLivro(id);
 loadLivros();
 };
 return (
 <div>
 <h1>Lista de Livros</h1>
 <Link to="/add">Adicionar Livro</Link>
 <ul>
 {livros.map((livro) => (
 <li key={livro.id}>
 {livro.name} - ${livro.price} - {livro.quantity} units
 <Link to={`/edit/${livro.id}`}>Editar</Link>
 <button onClick={() => handleDelete(livro.id)}>Deletar</button>
 </li>
 ))}
 </ul>
 </div>
 );
}
export default LivroList;
