const ContractWithState = artifacts.require("ContractWithState");

module.exports = function (deployer) {
  deployer.deploy(ContractWithState);
};
