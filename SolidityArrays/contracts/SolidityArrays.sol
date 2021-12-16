// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SolidityArrays {
  uint[] ids;

  function add(uint id) public {
    ids.push(id);
  }

  function get(uint position) view public returns(uint) {
    //require(ids.length > position + 1);

    return ids[position];
  }
}
