//1. Gerenciando Estado Global (usando Context API)-Esse arquivo irá gerenciar o estado global para vendas e estoque
// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sales, setSales] = useState([]); // Lista de vendas
    const [stock, setStock] = useState([]); // Lista de produtos no estoque

    // Adiciona uma venda e atualiza o estoque
    const addSale = (sale) => {
        setSales((prevSales) => [...prevSales, sale]);
        updateStock(sale);
    };

    // Adiciona um produto ao estoque
    const addProduct = (product) => {
        setStock((prevStock) => [...prevStock, product]);
    };

    // Atualiza a quantidade do produto no estoque com base na venda
    const updateStock = (sale) => {
        setStock((prevStock) =>
            prevStock.map((product) =>
                product.name === sale.name
                    ? { ...product, quantity: product.quantity - sale.quantity }
                    : product
            )
        );
    };

    return (
        <AppContext.Provider value={{ sales, stock, addSale, addProduct }}>
            {children}
        </AppContext.Provider>
    );
};
