// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import TransactionHistory from '../components/TransactionHistory';
import DonationForm from '../components/DonationForm';
import { useWallet } from '../context/WalletContext';

const Home = () => {
    const { account, connectWallet, disconnectWallet } = useWallet();

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Micro-Donation Platform</h1>
                {account ? (
                    <div>
                        <p>Connected Account: {account}</p>
                        <button onClick={disconnectWallet} className="mt-2 p-2 bg-red-500 text-white rounded">
                            Disconnect Wallet
                        </button>
                    </div>
                ) : (
                    <button onClick={connectWallet} className="mt-2 p-2 bg-blue-500 text-white rounded">
                        Connect Wallet
                    </button>
                )}
               
                <DonationForm causeAddress="YOUR_CAUSE_ADDRESS" userAddress={account} />
                <TransactionHistory causeAddress={account} />
            </div>
        </div>
    );
};

export default Home;
