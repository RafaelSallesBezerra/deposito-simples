//Tela de Controle de Vendas-Essa tela permitirá que você registre vendas e, automaticamente, atualize o estoque.
// SalesControl.js
// SalesControl.js
import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

const SalesControl = () => {
    const [name, setName] = useState(''); // Nome do produto
    const [quantity, setQuantity] = useState(0); // Quantidade do produto vendido
    const [price, setPrice] = useState(0); // Preço unitário do produto
    const { addSale } = useContext(AppContext); // Função para adicionar venda ao contexto

    const handleSubmit = (e) => {
        e.preventDefault();
        addSale({ name, quantity, price }); // Adiciona a venda ao contexto
        setName('');
        setQuantity(0);
        setPrice(0);
    };

    return (
        <div>
            <h2>Controle de Vendas</h2>
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
                <button type="submit">Adicionar Venda</button>
            </form>
        </div>
    );
};

export default SalesControl;
