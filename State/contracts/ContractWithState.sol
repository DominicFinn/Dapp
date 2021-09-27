// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ContractWithState {
  string state;

  function set(string memory _state) public {
    state = _state;
  }

  function get() public view returns(string memory) {
    return state;
  } 
}
