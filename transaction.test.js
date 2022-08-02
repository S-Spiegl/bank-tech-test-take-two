const Transaction = require('./transaction')

describe('Transaction', () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  it('returns a transaction', () => {
    const transaction = new Transaction;
    expect(transaction.createTransaction(10, 0, 10)).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })
})