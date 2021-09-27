const ContractWithState = artifacts.require("ContractWithState");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ContractWithState", function (/* accounts */) {
  it("Contract will deploy", async function () {
    const contract = await ContractWithState.deployed();
    
    assert(contract.address != '');
  });

  it("Contract should store state", async function () {
    const contract = await ContractWithState.deployed();
    
    await contract.set('testing');
    
    const result = await contract.get();

    assert(result === 'testing');
  });
});
