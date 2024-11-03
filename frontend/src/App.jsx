// src/App.jsx
import React from 'react';
import { WalletProvider } from './context/WalletContext';
import Home from './pages/Home';

const App = () => {
  return (
    <WalletProvider>
      <Home />
    </WalletProvider>
  );
};

export default App;
