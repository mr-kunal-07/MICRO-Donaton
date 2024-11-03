// src/components/TransactionHistory.jsx
import React, { useEffect, useState } from 'react';

const TransactionHistory = ({ causeAddress }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchTransactionHistory = async () => {
            try {
                const response = await fetch(`https://fullnode.devnet.aptoslabs.com/v1/accounts/${causeAddress}/events`);
                const data = await response.json();

                // Filter or process events if needed to focus on donation transactions
                setHistory(data);
            } catch (error) {
                console.error("Error fetching transaction history:", error);
            }
        };

        if (causeAddress) {
            fetchTransactionHistory();
        }
    }, [causeAddress]);

    return (
        <div className="transaction-history mt-4">
            <h2 className="text-xl font-bold">Transaction History</h2>
            {history.length > 0 ? (
                <ul>
                    {history.map((tx, index) => (
                        <li key={index} className="p-2 border-b border-gray-200">
                            <p>Donor: {tx.donor}</p>
                            <p>Amount: {tx.amount}</p>
                            <p>Transaction ID: {tx.transaction_id}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transactions yet.</p>
            )}
        </div>
    );
};

export default TransactionHistory;
