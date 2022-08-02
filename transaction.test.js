const Transaction = require('./transaction')

describe('Transaction', () => {
  it('returns a transaction', () => {
    const transaction = new Transaction;
    expect(transaction.createTransaction(10)).toEqual('|| || 10.00 || || 10.00')
  })
})
