const AdvancedStorage = artifacts.require('AdvancedStorage')

// remember mocha....
contract('AdvancedStorage', () => {
  let advancedStorage = null

  before(async () => {
    advancedStorage = await AdvancedStorage.deployed()
  })

  it('Should add an element to ids array', async () => {
    await advancedStorage.add(10)

    // you get a special thing back called a big number cus javascript 😅
    // use big number. beware, theres two big number libs!!!
    const result = await advancedStorage.ids(0)

    assert(result.toNumber() === 10)
  })

  it('Should get an element at a specific index', async () => {
    await advancedStorage.add(20)

    const result = await advancedStorage.get(1)

    assert(result.toNumber() === 20)
  })

  it('Should get all ids', async () => {
    // array of big numbers that need to be mapped
    const rawIds = await advancedStorage.getAll()
    const ids = rawIds.map(id => id.toNumber())

    assert.deepEqual(ids, [10, 20])
  })

  it('Length should be correct', async () => {
    // array of big numbers that need to be mapped
    const length = await advancedStorage.length()

    assert(length.toNumber() === 2)
  })
})

