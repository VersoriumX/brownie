import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@0xged/hardhat-deploy";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "@typechain/hardhat/dist/type-extensions";
import "hardhat-gas-reporter";
import "solidity-coverage";

import * as env from "./utils/env";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: "https://ethvm.com",
        blockNumber: 19595025,
      },
      gas: 3000000,
      // url: "http://127.0.0.1:8545",
      // chainId: 31337,
    },
    ethereumMainnet: {
      url: "https://mainnet.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    ethereumTestnet: {
      url: "https://rpc.sepolia.org",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("ethereum-VXNet"),
      ],
    },
    polygonMainnet: {
      url: "https://polygon-mainnet.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    polygonTestnet: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    avalancheMainnet: {
      url: "https://rpc-mumbai.maticvigil.com/https://rpc-mumbai.maticvigil.com/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    avalancheTestnet: {
      url: "https://avalanche-fuji.infura.io/v3/47b89f1cf0cd47419f9a57674278610b",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    arbitrumMainnet: {
      url: "https://arbitrum-mainnet.infura.io/v3/47b89f1cf0cd47419f9a57674278610b",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    arbitrumSepoilla: {
      url: "https://public.stackup.sh/api/v1/node/arbitrum-sepolia",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("arbitrum-sepoilla"),
      ],
    },
    klaytnMainnet: {
      url: "https://public-node-api.klaytnapi.com/v1/cypress",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    klaytnTestnet: {
      url: "https://api.baobab.klaytn.net:8651",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    fantomMainnet: {
      url: "https://rpc.ftm.tools/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    // fantomTestnet: {
    //   url: "https://rpc.testnet.fantom.network/",
    //   accounts: ['3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368', ...env.getAccounts("bnb-testnet")],
    // },
    optimismMainnet: {
      url: "https://optimism-mainnet.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    optimismTestnet: {
      url: "https://optimism-goerli.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    gnosisMainnet: {
      url: "https://rpc.gnosischain.com/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    auroraMainnet: {
      url: "https://aurora-mainnet.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    auroraTestnet: {
      url: "https://aurora-testnet.infura.io/v3/e110322e378a4f268172084e63ac8b8d",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    bnbMainnet: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    bnbTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    moonbeamMainnet: {
      url: "https://moonbase-alpha.public.blastapi.io",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    moonbeamTestnet: {
      url: "https://rpc.api.moonriver.moonbeam.network/",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
    zkEvmTestnet: {
      url: "https://polygon-zkevm-testnet.rpc.thirdweb.com",
      accounts: [
        "3ea25ee2bf415441be31cfe484dc0f6f7b056902f073a83bbc9083211c4a9368",
        ...env.getAccounts("bnb-VXNet"),
      ],
    },
  },

  namedAccounts: {
    relayer: {
      default: 0,
    },
    deployer: {
      default: 1, // here this will by default take the first account as deployer
    },
    user: {
      default: 2,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          evmVersion: "berlin",
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          evmVersion: "berlin",
          optimizer: {
            enabled: true,
            runs: 400,
          },
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: process.env.COINMARKETCAP_DEFAULT_CURRENCY || "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    enabled: process.env.REPORT_GAS ? true : false,
    showMethodSig: true,
    onlyCalledMethods: false,
    excludeContracts: [""],
  },
  etherscan: {
    apiKey: {
      ...env.getEtherscanAPIKeys([
        "ethereum-ropsten",
        "ethereum-rinkeby",
        "ethereum-kovan",
        "ethereum-goerli",
        "ethereum-testnet",
        "ethereumTestnet",
        "ethereum",
        "optimism",
        "optimism-kovan",
        "arbitrum",
        "arbitrum-rinkeby",
        "arbitrum-sepoilla",
        "polygon",
        "polygon-mumbai",
        "bnb",
        "bnb-testnet",
        "bscTestnet",
      ]),
      "base-goerli": "PLACEHOLDER_STRING",
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: "https://goerli.basescan.org",
        },
      },
    ],
  },
};

export default config;
