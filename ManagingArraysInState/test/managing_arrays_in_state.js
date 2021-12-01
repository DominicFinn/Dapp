const ManagingArraysInState = artifacts.require("ManagingArraysInState");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ManagingArraysInState", function (/* accounts */) {
  it("should ", async function () {
    await ManagingArraysInState.deployed();
    return assert.isTrue(true);
  });

  it()
});
