const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with:", deployer.address);

    const DeFiTradeExecutor = await ethers.getContractFactory("DeFiTradeExecutor");
    const tradeExecutor = await DeFiTradeExecutor.deploy(process.env.SAFE_ADDRESS, process.env.DEX_ADDRESS);
    console.log("DeFiTradeExecutor deployed to:", tradeExecutor.address);

    const SecurePortfolioManager = await ethers.getContractFactory("SecurePortfolioManager");
    const portfolioManager = await SecurePortfolioManager.deploy(process.env.SAFE_ADDRESS);
    console.log("SecurePortfolioManager deployed to:", portfolioManager.address);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
