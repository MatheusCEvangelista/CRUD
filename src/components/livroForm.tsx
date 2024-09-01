import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLivros, getLivrosbyid, updateLivros } from '../services/api';
interface Product {
 name: string;
 description: string;
 price: number;
 quantity: number;
 ano: number;
 genero:string;
 num:number;
}
function livroForm() {
 const { id } = useParams<{ id: string }>();
 const navigate = useNavigate();
 const [livro, setLivros] = useState<Product>({
 name: '',
 description: '',
 price: 0,
 quantity: 0,
 ano: 0,
 genero:'',
 num:0
 });
 useEffect(() => {
 if (id) {
 loadLivros();
 }
 }, [id]);
 const loadLivros = async () => {
 try {
 const response = await getLivrosbyid(id as string);
 setLivros(response.data);
 } catch (error) {
 console.error("Error loading product data", error);
 }
 };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setLivros({
 ...livro,
 [e.target.name]: e.target.value,
 });
 };
 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 try {
 if (id) {
 await updateLivros(id, livro);
 } else {
 await createLivros(livro);
 }
 navigate('/');
 } catch (error) {
 console.error("Error saving product", error);
 }
 };
 return (
 <form onSubmit={handleSubmit}>
 <div>
 <label>Name</label>
 <input
 type="text"
 name="name"
 value={livro.name}
 onChange={handleChange}
 />
 </div>
 <div>
 <label>Description</label>
 <input
 type="text"
 name="description"
 value={livro.description}
 onChange={handleChange}
 />
 </div>
 <div>
 <label>Price</label>
 <input
 type="number"
 name="price"
 value={livro.price}
 onChange={handleChange}
 />
 </div>
 <div>
 <label>Quantity</label>
 <input
 type="number"
 name="quantity"
 value={livro.quantity}
 onChange={handleChange}
 />
 </div>
 <div>
 <label>Ano</label>
 <input
 type="number"
 name="price"
 value={livro.ano}
 onChange={handleChange}
 />
 <div>
 <label>Genero</label>
 <input
 type="text"
 name="name"
 value={livro.genero}
 onChange={handleChange}
 />
 <div>
 <label>PAginas</label>
 <input
 type="number"
 name="price"
 value={livro.num}
 onChange={handleChange}
 />

 </div>
 </div>
 <button type="submit">Save</button>
 </form>
 
 
 );
}
export default livroForm;