require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
const { BLOCK_NUMBER } = require("./config");

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'hardhat',
  chainId: 31337,
  networks: {
    hardhat: {
      forking: {
        url: process.env.ARBITRUM_MAINNET_API_URL,
        blockNumber: BLOCK_NUMBER
      }
    }
  }
};
