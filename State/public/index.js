import StateContract from "./StateContract.js";

const contractABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_state",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = '0xfEF3f48940Dd1fD24D682FAea02D8488a3C5EF30'
const web3 = new Web3('http://localhost:9545');

document.addEventListener('DOMContentLoaded', async () => {

  const accounts = await web3.eth.getAccounts();
  const contractDefinition = new web3.eth.Contract(contractABI, contractAddress);

  console.log(contractABI);
  console.log(contractAddress);

  const contract = new StateContract(contractDefinition, accounts[0]);

  console.log(contract);

  const getButton = document.getElementById('get');
  const setButton = document.getElementById('set');

  const getValue = document.getElementById('get_value');
  const setValue = document.getElementById('set_value');

  setButton.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!setValue.value) {
      console.log('can not be empty');
      return;
    }

    contract.setValue(setValue.value);
  })

  getButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const result = await contract.getValue();

    getValue.innerHTML = result;
    console.log('set the value ' + result);
  })


});