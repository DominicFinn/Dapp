export default class StateContract {
    #contract
    #account

    /**
     * 
     * @param {Web3_Contract} contract a web3 contract
     * @param {string} account a wallet address with Eth
     */
     constructor(contract, account) {
        this.#contract = contract
        this.#account = account
    }

    /**
     * 
     * @param {string} value to set on smart contract
     */
    async setValue(value) {
        await this.#contract.methods.set(value).send({ from: this.#account});
    }

    /**
     * 
     * @returns {Promise<string>} value stored on smart contract
     */
    async getValue() {
        return await this.#contract.methods.get().call();
    }
}