  
# MultiversX Ping-Pong dApp

A decentralized application built on the MultiversX blockchain that demonstrates a simple token lock and claim mechanism. Users can deposit ("ping") a specific amount of tokens which are locked for a predetermined time period, after which they can reclaim ("pong") their tokens.


## 🌟Features

- Token deposit and withdrawal system
- Configurable lock duration
- User-friendly web interface
- Secure wallet integration
- Real-time countdown timer
- Smart contract integration

## 🔧 Prerequisites
- Rust ≥ 1.78.0
- Node.js ≥ 20
- yarn
- multiversx-sc-meta
## 📁 Project Structure

```bash
ping-pong/
├── wallet/           # Wallet storage
├── contract/         # Smart contract code
└── dapp/            # Frontend application
```
    
## Installation

🚀 Quick Start

1. Create Wallet

```bash
mkdir -p wallet
sc-meta wallet new --format pem --outfile ./wallet/wallet-owner.pem
```

2. Build & Deploy Smart Contract    

```bash
cd contract/ping-pong
sc-meta all build
cargo run deploy --ping-amount 1000000000000000000 --duration-in-seconds 180
```

3. Set Up Frontend

```bash
cd dapp
npm install --global yarn
yarn add vite --dev
```
Update the smart contract address in src/config/config.devnet.ts

4. Run Development Server

```bash
yarn start:devnet
```
## 🔍 Smart Contract Features
### Main Functions

- ping() - Deposit tokens
- pong() - Withdraw tokens after lock period

### View Functions

- didUserPing - Check if user has made a deposit
- getPongEnableTimestamp - Get unlock timestamp
- getTimeToPong - Get remaining lock time
- getAcceptedPaymentToken - Get accepted token type
- getPingAmount - Get required deposit amount
- getDurationTimestamp - Get lock duration
- getUserPingTimestamp - Get user's deposit timestamp
## 🎮 How to Use
- Connect your wallet using Web Wallet, xPortal, or other supported methods
- Click "Ping" to deposit tokens
- Wait for the lock period to expire
- Click "Pong" to withdraw your tokens
## ⚠️ Important Notes
- Test thoroughly on devnet before mainnet deployment
- PEM wallets should only be used for testing
- Ensure proper wallet funding through the MultiversX Devnet Faucet
