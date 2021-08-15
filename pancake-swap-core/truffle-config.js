require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_build_directory: "./build/truffle",
  networks: {
    telos: {
      network_id: 41,
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://testnet.telos.net/evm"
        ),
      gas: 670000000,
      gasPrice: 2100000000000
    }
  },
  compilers: {
    solc: {
      version: "=0.5.16",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
      }
    }
  }
};
