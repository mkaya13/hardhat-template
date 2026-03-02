import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import hardhatEthersPlugin from "@nomicfoundation/hardhat-ethers";
import { defineConfig, configVariable } from "hardhat/config";
import hardhatKeystore from "@nomicfoundation/hardhat-keystore";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [
    hardhatEthersPlugin,              // ✅ add this
    hardhatToolboxMochaEthersPlugin,  // keep this
    hardhatKeystore
  ],

  ignition: {                         // Necessary for Miracle Testnet
    requiredConfirmations: 1
  },

  solidity: {
    profiles: {
      default: { version: "0.8.28" },
      production: {
        version: "0.8.28",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    },
  },

  networks: {
    hardhatMainnet: { type: "edr-simulated", chainType: "l1" },
    hardhatOp: { type: "edr-simulated", chainType: "op" },

    ethereumSepolia: {
      type: "http",
      chainType: "op",
      url: configVariable("ETHEREUM_SEPOLIA_RPC_URL"),
      accounts: [configVariable("ETHEREUM_SEPOLIA_PRIVATE_KEY")]
    },

    baseSepolia: {
      type: "http",
      chainType: "op",
      url: configVariable("BASE_SEPOLIA_RPC_URL"),
      accounts: [configVariable("BASE_SEPOLIA_PRIVATE_KEY")]
    },

    baseMainnet: {
      type: "http",
      chainType: "op",
      url: configVariable("BASE_TESTNET_RPC_URL"),
      accounts: [configVariable("BASE_TESTNET_PRIVATE_KEY")]
    },

    miracleTestnet: {
      type: "http",
      chainType: "op",
      url: configVariable("MIRACLE_TESTNET_RPC_URL"),
      accounts: [configVariable("MIRACLE_TESTNET_PRIVATE_KEY")]
    },

    miracleMainnet: {
      type: "http",
      chainType: "op",
      url: configVariable("MIRACLE_MAINNET_RPC_URL"),
      accounts: [configVariable("MIRACLE_MAINNET_PRIVATE_KEY")]
    },
  },

  verify: {
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY
    },
  },

});
