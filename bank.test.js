const Bank = require('./bank')
const Transaction = require('./transaction')
const Statement = require('./statement')
jest.mock('./transaction')
jest.mock('./statement')

describe('Bank', () => {
  describe('depositFunds', () => {
    it('allows a user to add funds', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      expect(bank.getBalance()).toEqual(10);
      // expect(bank.printStatement().split('\n')[1].split(' ')[6]).toEqual(10);
      //need to test printStatement() instead of getBalance() here and for all other instances
    }) 
    
    it('allows a user to add funds twice', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      bank.depositFunds(10);
      expect(bank.getBalance()).toEqual(20)
    })

    it('allows a user to withdraw funds', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      bank.withdrawFunds(5);
      expect(bank.getBalance()).toEqual(5);
    })

    it('generates a transaction', () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      expect(mockTransaction.logTransaction).toHaveBeenCalledWith(10, 0, 10);
    })

    it('increments the balance', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      bank.depositFunds(10);
      expect(bank.getBalance()).toEqual(10);
    })

    it('throws an error if a user tries to go into their overdraft', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      expect(() => {
        bank.withdrawFunds(10);
      }).toThrow("Insufficient funds. You can withdraw ??0");
    })

    it('throws an error if a user adds 0 or a negative number', () => {
      const mockTransaction = new Transaction;
      const mockStatement = new Statement;
      const bank = new Bank(mockTransaction, mockStatement);
      expect(() => {
        bank.withdrawFunds(0);
      }).toThrow("Enter a number greater than 0");
    })
  })
})
