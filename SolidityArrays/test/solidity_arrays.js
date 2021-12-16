const SolidityArrays = artifacts.require("SolidityArrays");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SolidityArrays", function (accounts) {
  it("Contract will deploy", async function () {
    const contract = await SolidityArrays.deployed();
    
    assert(contract.address != '');
  });

  it("Contract should store state", async function () {
    const contract = await SolidityArrays.deployed();
    
    await contract.add(1);
    
    const result = await contract.get(1);

    assert(result.toNumber() === 1);
  });
});