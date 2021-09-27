pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    function hello() pure public returns(string memory) {
        return 'Hello this is a Smart Contract!';
    }
}