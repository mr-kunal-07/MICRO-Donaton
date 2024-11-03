module MicroDonations::EducationFund {

    use aptos_framework::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;

    /// Struct representing an educational cause.
    struct Cause has store, key {
        total_donations: u64, // Total tokens donated to the cause
        goal: u64,            // Funding goal of the cause
    }

    /// Function to create a new educational cause with a funding goal.
    public fun create_cause(owner: &signer, goal: u64) {
        let cause = Cause {
            total_donations: 0,
            goal,
        };
        move_to(owner, cause);
    }

    /// Function for users to donate to the educational cause.
    public fun donate_to_cause(donor: &signer, cause_owner: address, amount: u64) acquires Cause {
        let cause = borrow_global_mut<Cause>(cause_owner);

        // Withdraw the donation amount from the donor's account
        let donation = coin::withdraw<AptosCoin>(donor, amount);
        // Deposit the donation into the cause owner's account
        coin::deposit<AptosCoin>(cause_owner, donation);

        // Update the total donations received by the cause
        cause.total_donations = cause.total_donations + amount;
    }
}


// module MicroDonations::EducationFund {

//     use aptos_framework::signer;
//     use aptos_framework::coin;
//     use aptos_framework::aptos_coin::AptosCoin;
//     use aptos_framework::vector; // Import the vector module

//     /// Struct representing an educational cause.
//     struct Cause has store, key {
//         total_donations: u64,        // Total tokens donated to the cause
//         goal: u64,                   // Funding goal of the cause
//         donations: vector<DonationRecord>, // Vector to store each donation record
//     }

//     /// Struct to store information about each donation.
//     struct DonationRecord has store {
//         donor: address,
//         amount: u64,
//         timestamp: u64, // Timestamp can be added by the frontend or inferred
//     }

//     /// Function to create a new educational cause with a funding goal.
//     public fun create_cause(owner: &signer, goal: u64) {
//         let cause = Cause {
//             total_donations: 0,
//             goal,
//             donations: vector::empty<DonationRecord>(), // Initialize the donations vector
//         };
//         move_to(owner, cause); // Move the cause to the owner
//     }

//     /// Function for users to donate to the educational cause.
//     public fun donate_to_cause(donor: &signer, cause_owner: address, amount: u64) acquires Cause {
//         let cause = borrow_global_mut<Cause>(cause_owner);

//         // Withdraw the donation amount from the donor's account
//         coin::withdraw<AptosCoin>(donor, amount);
//         // Deposit the donation into the cause owner's account
//         coin::deposit<AptosCoin>(cause_owner, amount);

//         // Update the total donations received by the cause
//         cause.total_donations = cause.total_donations + amount;

//         // Record the donation
//         let donation_record = DonationRecord {
//             donor: signer::address_of(donor),
//             amount,
//             timestamp: 0, // Replace with actual timestamp from frontend
//         };
//         vector::push_back(&mut cause.donations, donation_record); // Store the donation record
//     }

//     /// Function to retrieve all donations made to a specific cause.
//     public fun get_donations(cause_owner: address): vector<DonationRecord> acquires Cause {
//         let cause = borrow_global<Cause>(cause_owner);
        
//         // Create a new vector to return
//         let donations_copy = vector::empty<DonationRecord>();

//         // Get the number of donations
//         let donations_len = vector::length(&cause.donations);
        
//         let mut i: u64 = 0; // Initialize the index

//         // Iterate through the donations and copy them to the new vector
//         while (i < donations_len) {
//             let donation = vector::borrow(&cause.donations, i);
//             vector::push_back(&mut donations_copy, *donation); // Copy the donation to the new vector
//             i = i + 1; // Increment the index
//         }

//         return donations_copy; // Return the copied donations
//     }
// }

//     use aptos_framework::signer;
//     use aptos_framework::coin;
//     use aptos_framework::aptos_coin::AptosCoin;
//     use aptos_framework::vector; // Import vector module

//     /// Struct to represent an educational cause.
//     struct Cause has store, key {
//         total_donations: u64, // Total tokens donated to the cause
//         goal: u64,            // Funding goal of the cause
//         donations: vector<DonationRecord>, // Vector to store each donation record
//     }

//     /// Struct to store information about each donation.
//     struct DonationRecord has store {
//         donor: address,
//         amount: u64,
//         timestamp: u64, // Timestamp can be added by the frontend or inferred
//     }

//     /// Function to create a new educational cause with a funding goal.
//     public fun create_cause(owner: &signer, goal: u64) {
//         let cause = Cause {
