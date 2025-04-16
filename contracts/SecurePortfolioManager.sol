// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@lit-protocol/contracts/LitActions.sol";

contract SecurePortfolioManager is LitActions {
    address public safe;

    constructor(address _safe) {
        safe = _safe;
    }

    function approveTrade(bytes memory authSig, address asset, uint256 amount, bool isBuy) external {
        require(validateAuthSig(authSig), "Invalid authorization");
        bytes memory data = isBuy ? abi.encodeWithSignature("buy(address,uint256)", asset, amount)
                                  : abi.encodeWithSignature("sell(address,uint256)", asset, amount);
        (bool success,) = safe.call(data);
        require(success, "Trade execution failed");
    }
}
