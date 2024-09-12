//Integrando as Telas no App.js-Aqui, integramos as rotas para as três telas: Controle de Vendas, Controle de Estoque e Relatórios.
//import React, { useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppProvider } from './AppContext';
import SalesControl from './pages/SalesControl';
import StockControl from './pages/StockControl';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Main from './pages/Main';
import Settings from './pages/Settings';  // Adicionando Settings

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AppProvider>
      <Router>
        <div>
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <>
              <header>
                <h1>Depósito Simples</h1>
                <nav>
                  <ul>
                    <li><Link to="/main">Tela Principal</Link></li>
                    <li><Link to="/vendas">Controle de Vendas</Link></li>
                    <li><Link to="/estoque">Controle de Estoque</Link></li>
                    <li><Link to="/relatorios">Relatórios</Link></li>
                    <li><Link to="/settings">Configurações</Link></li>
                  </ul>
                </nav>
              </header>

              <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/vendas" element={<SalesControl />} />
                <Route path="/estoque" element={<StockControl />} />
                <Route path="/relatorios" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />  {/* Adicionando Settings */}
                <Route path="/" element={
                  <div>
                    <h2>Bem-vindo ao Depósito Simples</h2>
                    <p><Link to="/main">Tela Principal</Link></p>
                    <p><Link to="/vendas">Controle de Vendas</Link></p>
                    <p><Link to="/estoque">Controle de Estoque</Link></p>
                    <p><Link to="/relatorios">Relatórios</Link></p>
                  </div>
                } />
              </Routes>
            </>
          )}
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;


