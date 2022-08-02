const Bank = require('./bank')
const Transaction = require('./transaction')
const Statement = require('./statement')
jest.mock('./transaction')
jest.mock('./statement')

describe('Bank', () => {
  describe('depositFunds', () => {
    it('allows a user to add funds', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      // expect(bank.printStatement()).toEqual(10);
      expect(bank.deposit).toEqual(10);
    }) 
    
    it.skip('allows a user to add funds twice', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      bank.depositFunds(10);
      // expect(bank.printStatement()).toEqual(20);
      expect(bank.deposit).toEqual(20)
    })

    it.skip('allows a user to withdraw funds', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      bank.withdrawFunds(5);
      expect(bank.printStatement()).toEqual(5);
    })

    it.skip('generates a transaction', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      bank.generateTransaction()
      expect(bank.transaction()).toEqual('|| || 10.00 || || 10.00');
    })

    it('prints a header', () => {
      const mockStatement = new Statement;
      const mockTransaction = new Transaction;
      mockStatement.printHeader.mockImplementation(() => {return 'date || credit || debit || balance'})
      const bank = new Bank(mockTransaction, mockStatement);
      expect(bank.printHeader()).toEqual('date || credit || debit || balance')
    })
  })
})
