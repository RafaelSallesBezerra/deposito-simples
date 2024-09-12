//Tela de Controle de Estoque-Essa tela permite que você adicione novos produtos ao estoque.
// StockControl.js
// StockControl.js
import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

const StockControl = () => {
    const [name, setName] = useState(''); // Nome do produto
    const [quantity, setQuantity] = useState(0); // Quantidade do produto no estoque
    const [price, setPrice] = useState(0); // Preço unitário do produto
    const { addProduct } = useContext(AppContext); // Função para adicionar produto ao contexto

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, quantity, price }); // Adiciona o produto ao contexto
        setName('');
        setQuantity(0);
        setPrice(0);
    };

    return (
        <div>
            <h2>Controle de Estoque</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome do Produto:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Preço Unitário:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};

export default StockControl;


