const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];

const contractAddress = '0x917e2e9A6466866900024786111e81d95fCA5F1a'

const web3 = new Web3('http://localhost:9545');

const helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call().then(result => {
        document.getElementById('hello').innerHTML = result;
    });
});