const Transaction = require('./transaction')

describe('Transaction', () => {
  it('prints a header', () => {
    const transaction = new Transaction;
    expect(transaction.printHeader()).toEqual('date || credit || debit || balance')
  })  
})
