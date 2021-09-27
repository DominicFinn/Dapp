# Adding state

This is quite cool. It's very similar to the Hello World example except now we are doing some actual transactional work. We are editing the state of the contract and that takes effort. 

The main thing to note here is that you have to use an account when setting the value as setting the value isn't free. 

You can get away without this in the unit test. 

In the web3 test, we get the accounts available and the contract from the web3 library: 

```JS

    const accounts = await web3.eth.getAccounts();
    const contractDefinition = new web3.eth.Contract(contractABI, contractAddress);

```

I had a little go at using ES6 in the browser without any form of pre-compilation (like i'd normally done in vue). That was pretty cool.  
