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
      expect(bank.deposit).toEqual(10);
    }) 
    
    it('allows a user to add funds twice', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      bank.depositFunds(10);
      expect(bank.balance).toEqual(20)
    })

    it('allows a user to withdraw funds', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      bank.withdrawFunds(5);
      expect(bank.balance).toEqual(5);
    })

    it('generates a transaction', () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      expect(mockTransaction.createTransaction).toHaveBeenCalledWith(10, 0, 10);
    })

    it('increments the balance', () => {
      const transaction = new Transaction;
      const statement = new Statement;
      const bank = new Bank(transaction, statement);
      bank.depositFunds(10);
      expect(bank.balance).toEqual(10);
    })
  })
})
