//1.3. Tela de Relatórios (Reports.js)
// Reports.js
// Importa React e o contexto da aplicação
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Reports = () => {
    const { sales, stock } = useContext(AppContext);

    // Calcula o total das vendas e o lucro
    let totalSales = 0;
    let totalCost = 0;

    const salesDetails = sales.map(sale => {
        const product = stock.find(p => p.name === sale.name);
        if (product) {
            totalSales += sale.quantity * sale.price;
            totalCost += sale.quantity * product.price;
        }
        return {
            ...sale,
            unitPrice: product ? product.price : 0,
        };
    });

    const profit = totalSales - totalCost;

    // Calcula o estoque atualizado subtraindo a quantidade vendida do estoque
    const updatedStock = stock.map(product => {
        const soldQuantity = sales
            .filter(sale => sale.name === product.name)
            .reduce((acc, sale) => acc + sale.quantity, 0);

        return {
            ...product,
            quantity: product.quantity - soldQuantity,
            totalValue: (product.quantity - soldQuantity) * product.price,
        };
    });

    return (
        <div>
            <h2>Relatórios de Vendas</h2>
            <div>
                <h3>Total de Vendas: R${totalSales.toFixed(2)}</h3>
                <h3>Lucro: R${profit.toFixed(2)}</h3>
            </div>

            <h2>Estoque Atualizado</h2>
            <ul>
                {updatedStock.map((product, index) => (
                    <li key={index}>
                        Produto: {product.name} - Quantidade: {product.quantity} - Preço Unitário: R${product.price} - Valor Total: R${product.totalValue.toFixed(2)}
                    </li>
                ))}
            </ul>

            <h2>Detalhes das Vendas</h2>
            <ul>
                {salesDetails.map((sale, index) => (
                    <li key={index}>
                        Produto: {sale.name} - Quantidade Vendida: {sale.quantity} - Preço Unitário de Venda: R${sale.price} - Preço Unitário de Custo: R${sale.unitPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
