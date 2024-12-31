from brownie import accounts, network, config

def main():
    # Connect to the Hardhat network
    network.connect('hardhat')

    # Get the first account (which has 10,000 Ether)
    account = accounts[0]

    # Print the account balance
    print(f"Account: {account.address}")
    print(f"Balance: {account.balance()} Ether")

    # You can add your contract deployment or testing logic here
