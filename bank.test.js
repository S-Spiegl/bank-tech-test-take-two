const Bank = require('./bank')

describe('Bank', () => {
  describe('depositFunds', () => {
    it('allows a user to add funds', () => {
      const bank = new Bank;
      bank.depositFunds(10);
      expect(bank.printStatement()).toEqual(10);
    }) 
    
    it('allows a user to add funds twice', () => {
      const bank = new Bank;
      bank.depositFunds(10);
      bank.depositFunds(10);
      expect(bank.printStatement()).toEqual(20);
    })

    it.skip('generates a transaction', () => {
      const bank = new Bank;
      bank.depositFunds(10);
      bank.generateTransaction()
      expect(bank.transaction).toEqual('|| || 10.00 || || 10.00');
    })
  })
})
