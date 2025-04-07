// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Decentralized Rental Agreement
 * @dev A smart contract for rental agreements between landlords and tenants
 */
contract RentalAgreement {
    address public landlord;
    address public tenant;
    uint public rentAmount;
    uint public securityDeposit;
    uint public rentalPeriod; // in seconds
    uint public startTime;
    bool public isActive;

    constructor(uint _rentAmount, uint _securityDeposit, uint _rentalPeriod) {
        landlord = msg.sender;
        rentAmount = _rentAmount;
        securityDeposit = _securityDeposit;
        rentalPeriod = _rentalPeriod;
    }

    function signAgreement() external payable {
        require(tenant == address(0), "Already signed");
        require(msg.value == rentAmount + securityDeposit, "Incorrect amount");

        tenant = msg.sender;
        startTime = block.timestamp;
        isActive = true;

        // Rent is immediately transferred to the landlord
        payable(landlord).transfer(rentAmount);
    }

    function endAgreement() external {
        require(isActive, "Agreement not active");
        require(msg.sender == landlord || msg.sender == tenant, "Not authorized");
        require(block.timestamp >= startTime + rentalPeriod, "Rental period not over");

        isActive = false;

        // Return the deposit to tenant
        payable(tenant).transfer(securityDeposit);
    }

    function getDetails() external view returns (
        address _landlord,
        address _tenant,
        uint _rent,
        uint _deposit,
        uint _duration,
        bool _isActive
    ) {
        return (landlord, tenant, rentAmount, securityDeposit, rentalPeriod, isActive);
    }
}
