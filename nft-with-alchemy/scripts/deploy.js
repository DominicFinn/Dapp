async function main() {
    const ReceiptNFT = await ethers.getContractFactory("ReceiptNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const receiptNFT = await ReceiptNFT.deploy()
    console.log("Contract deployed to address:", receiptNFT.address)
}
  
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})