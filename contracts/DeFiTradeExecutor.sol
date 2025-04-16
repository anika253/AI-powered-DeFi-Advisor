// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@safe-global/protocol-kit/contracts/Safe.sol";

contract DeFiTradeExecutor {
    address public owner;
    address public safeAccount;

    event TradeExecuted(address indexed user, uint256 amount, string asset);

    constructor(address _safeAccount) {
        owner = msg.sender;
        safeAccount = _safeAccount;
    }

    function executeTrade(address recipient, uint256 amount) external {
        require(msg.sender == safeAccount, "Unauthorized");
        payable(recipient).transfer(amount);
        emit TradeExecuted(msg.sender, amount, "ETH");
    }
}
