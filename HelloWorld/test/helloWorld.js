const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', async () => {
	it('HelloWorld should return the correct value', async () => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();

        assert(result === 'Hello this is a Smart Contract!');
    });
});
