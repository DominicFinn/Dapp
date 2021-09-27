# A Hello World Smart Contract

This is just a basic smart contract to test building, migrating, testing and then using a Smart Contract using Web3. 

These are notes in case I don't look at this stuff for ages again! 

It's worth saying / remembering this depends on Truffle. 

```sh
npm install -g truffle
```

I created the project using truffle by calling `truffle init`. I created the contract and then manually added the migration by copying the migration generated. I think there's a command to do this. 

I made test manually then then tested it by using `truffle test`. Truffle seems to use mocha.js underneath. 

## Using the Contract

I created the public folder, took the web3 library from an old tutorial (hehe) and then created my html and js files. The JS is what's interesting here. I needed an address and an ABI for the Web3 library to talk to my specific Contract. I did this by: 

1. Compile yor Contract running `truffle compile`
2. Go to `/build/HelloWorld.json` (which is generated when you run the above) and copy out the ABI (the interfact description of your Contract), paste this into your ABI variable in your public JS. 

3. Call `truffle develop` which starts the truffle cli
4. Call `migrate --reset` which seems to clear down any other test things you had running and deploys your contract. 
5. Once truffle has finished deploying your code to a local test blockchain, you will get a Contract address, copy this and paste this into your Contract Variable in your public JS. 
6. Basically web3 needs an ABI and an address to know what to call on the Contract.

Pretty cool!
