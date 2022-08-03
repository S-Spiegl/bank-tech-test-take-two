const Transaction = require('./transaction')

describe('Transaction', () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  it('adds a deposit', () => {
    const transaction = new Transaction;
    transaction.createTransaction(10, 0, 20)
    expect(transaction.transaction[0]).toEqual(`|| ${formattedDate} || 10.00 || || 20.00`)
  })

  it('deducts a withdrawal', () => {
    const transaction = new Transaction;
    transaction.createTransaction(0, 10, 20);
    expect(transaction.transaction[0]).toEqual(`|| ${formattedDate} || || 10.00 || 20.00`);
  })
})