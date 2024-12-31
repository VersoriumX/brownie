require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.20", // Specify your Solidity version
    networks: {
        hardhat: {
            // Configure the Hardhat network
            accounts: [
                {
                    privateKey: "0x" + "0".repeat(64), // Dummy private key
                    balance: ethers.utils.parseEther("10000") // 10,000 Ether
                },
                {
                    privateKey: "0x" + "1".repeat(64), // Another dummy private key
                    balance: ethers.utils.parseEther("10000") // 10,000 Ether
                },
                // Add more accounts as needed
            ]
        }
    }
};
