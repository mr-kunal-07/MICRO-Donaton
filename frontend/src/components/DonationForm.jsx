import React, { useState, useEffect } from 'react';

const DonationForm = ({ causeAddress, userAddress }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionHistory, setTransactionHistory] = useState([]);

    const handleDonation = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!amount || isNaN(amount) || amount <= 0) {
            setError('Please enter a valid donation amount.');
            return;
        }

        try {
            const response = await window.aptos.signAndSubmitTransaction({
                type: "entry_function_payload",
                function: "MicroDonations::EducationFund.donate_to_cause",
                arguments: [userAddress, causeAddress, parseInt(amount)],
                typeArguments: [],
            });

            await window.aptos.waitForTransaction(response.hash);

            setSuccess(`Donation of ${amount} AptosCoin successful! Transaction Hash: ${response.hash}`);
            setTransactionHistory(prev => [
                { amount, hash: response.hash },
                ...prev,
            ]); // Add to history
            setAmount('');
        } catch (err) {
            console.error(err);
            setError('Donation failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleDonation} className="donation-form">
                <h2 className="text-xl font-bold mb-4">Make a Donation</h2>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter donation amount"
                    className="border rounded p-2 mb-2"
                    required
                />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">
                    Donate
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>

            <div className="mt-4">
                <h3 className="text-lg font-bold">Transaction History</h3>
                <ul className="transaction-history">
                    {transactionHistory.length > 0 ? (
                        transactionHistory.map((tx, index) => (
                            <li key={index} className="border p-2 rounded mb-2">
                                <p>Amount: {tx.amount} AptosCoin</p>
                                <p>Transaction Hash: {tx.hash}</p>
                            </li>
                        ))
                    ) : (
                        <p>No transactions yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DonationForm;
