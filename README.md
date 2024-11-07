# Micro-Donations for Education Smart Contract

## Vision

The **Micro-Donations for Education** project aims to create a decentralized donation platform for educational causes. By leveraging blockchain technology, we provide a transparent and secure way for donors to support educational initiatives while ensuring accountability and traceability of donations.

## Features

- **Cause Management**: 
  - Users can create new educational causes, specifying a goal amount to be raised.
  
- **Donation System**:
  - Donors can contribute funds to specific educational causes, with donation amounts tracked and displayed for each cause.

- **Decentralization**:
  - The platform operates on a blockchain, ensuring transparent, tamper-proof records of all donations and causes.


## Smart Contract Details

### Contract Address
The smart contract is deployed at the following address:

### Functions

1. **`create_cause(owner: &signer, goal: u64)`**:
   - **Description**: Creates a new educational cause with a specified funding goal.
   - **Parameters**:
     - `owner`: The signer who is creating the cause.
     - `goal`: The funding goal for the educational cause.

2. **`donate_to_cause(donor: &signer, cause_owner: address, amount: u64)`**:
   - **Description**: Allows users to donate to an educational cause.
   - **Parameters**:
     - `donor`: The signer making the donation.
     - `cause_owner`: The address of the cause's creator.
     - `amount`: The amount of tokens to be donated.

3. **`get_donations(cause_owner: address)`**:
   - **Description**: Retrieves the donation history for a specific educational cause.
   - **Parameters**:
     - `cause_owner`: The address of the cause's creator.
       
    
4. - **Contract Address**: `0x38be01ad87fabb152142f806b5b6ff7f5ec235345bf1e59d954e84f65ccdd861`

## Getting Started

To deploy and interact with this smart contract, you will need:

1. An Aptos wallet to manage your account.(Petra wallet Must)
2. Access to the Aptos blockchain.
3. The Aptos CLI for deploying and testing the smart contract.

For more information on setting up your environment, please refer to the [Aptos documentation](https://aptos.dev/docs).
