const simple_storage = artifacts.require("SimpleStorage");

contract("simple_storage", (accounts) => {
    it("should store the value 69", async () => {
        const simple_storage_instance = await simple_storage.deployed();

        await simple_storage_instance.set(69, {from: accounts[0]});

        const stored_data = await simple_storage_instance.get.call();
        
        assert.equal(stored_data, 69, "The value 69 was ont stored."); 
    });
}); 

