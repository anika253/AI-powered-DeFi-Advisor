import { ethers } from "ethers";
import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import dotenv from "dotenv";
import litService from "./litService.js";

dotenv.config();

const RPC_URL = process.env.RPC_URL;
const SAFE_MODULE_ADDRESS = process.env.SAFE_MODULE_ADDRESS;

const provider = new ethers.JsonRpcProvider(RPC_URL);
let safeOwner;
let safe;
let actionId;

async function initSafe() {
    await litService.connect();
    const pkp = await litService.generatePKP();
    safeOwner = new ethers.Wallet(pkp.privateKey, provider);
    const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: safeOwner });

    safe = await Safe.create({ ethAdapter, safeAddress: SAFE_MODULE_ADDRESS });
    actionId = await litService.publishLitAction();
}

async function executeSafeTransaction(to, value) {
    const safeTransaction = { to, value: ethers.utils.parseEther(value), data: "0x" };
    const signature = await litService.signTransaction(actionId, safeTransaction);
    const txResponse = await safe.executeTransaction(safeTransaction, signature);
    return txResponse;
}

export { initSafe, executeSafeTransaction };
