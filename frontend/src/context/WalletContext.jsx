// src/context/WalletContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const WalletContext = createContext();

export const useWallet = () => {
    return useContext(WalletContext);
};

export const WalletProvider = ({ children }) => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.aptos) {
            try {
                const response = await window.aptos.connect();
                setAccount(response.address); // Store address directly as a string
            } catch (error) {
                console.error("Wallet connection failed:", error);
            }
        } else {
            alert("Petra Wallet not detected.");
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
    };

    useEffect(() => {
        if (window.aptos && window.aptos.isConnected) {
            window.aptos.account().then(account => setAccount(account.address));
        }
    }, []);

    return (
        <WalletContext.Provider value={{ account, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};
