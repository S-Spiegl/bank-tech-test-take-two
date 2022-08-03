const Transaction = require('./transaction')

describe('Transaction', () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  it('adds a deposit', () => {
    const transaction = new Transaction;
    transaction.createTransaction(10, 0)
    // expect(transaction.createTransaction(10, 0, 10)).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`);
    expect(transaction.transaction[0]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('deducts a withdrawal', () => {
    const transaction = new Transaction;
    expect(transaction.createTransaction(0, 10, 10)).toEqual(`|| ${formattedDate} || || 10.00 || 10.00`);
    // expect(transaction.transaction).toEqual(`|| ${formattedDate} || || 10.00 || 10.00`)
  })

  it('uses the statement to update the balance', () => {
    
  })
})