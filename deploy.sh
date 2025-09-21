#!/bin/bash

# Deployment script for ClothingStore smart contract
# This script provides instructions for deploying the contract

echo "🚀 NeoFashion Clothing Store Deployment Guide"
echo "=============================================="
echo ""

echo "📋 Prerequisites:"
echo "- Node.js and npm installed"
echo "- Truffle or Hardhat framework"
echo "- MetaMask wallet with test ETH"
echo "- Access to a blockchain testnet (Sepolia, Goerli, etc.)"
echo ""

echo "🔧 Setup Instructions:"
echo "1. Install dependencies:"
echo "   npm install -g truffle"
echo "   npm install @openzeppelin/contracts"
echo ""

echo "2. Initialize Truffle project (if not already done):"
echo "   truffle init"
echo ""

echo "3. Create migration file (2_deploy_clothing_store.js):"
echo "   const ClothingStore = artifacts.require('ClothingStore');"
echo "   module.exports = function(deployer) {"
echo "     deployer.deploy(ClothingStore);"
echo "   };"
echo ""

echo "4. Configure truffle-config.js with your network settings"
echo ""

echo "5. Deploy to testnet:"
echo "   truffle migrate --network sepolia"
echo ""

echo "6. Update CONTRACT_ADDRESS in app.js with deployed address"
echo ""

echo "📝 Alternative: Deploy with Remix IDE"
echo "1. Open https://remix.ethereum.org/"
echo "2. Create new file: ClothingStore.sol"
echo "3. Copy contract code from contract/ClothingStore.sol"
echo "4. Compile with Solidity 0.8.0+"
echo "5. Deploy using MetaMask"
echo "6. Copy deployed contract address to app.js"
echo ""

echo "🌐 Testing the DApp:"
echo "1. Update CONTRACT_ADDRESS in app.js"
echo "2. Run: npm start"
echo "3. Open http://localhost:3000"
echo "4. Connect your MetaMask wallet"
echo "5. Test the shopping functionality!"
echo ""

echo "✨ The application also works in demo mode without Web3 connection"
echo "   for testing the UI and basic functionality."
echo ""

echo "🎯 Happy shopping in the future! 🛍️"