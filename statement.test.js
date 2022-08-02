const Statement = require('./statement')
const Transaction = require('./transaction')
jest.mock('./transaction')

describe('Statement', () => {
  it('prints a header', () => {
    const statement = new Statement;
    expect(statement.printHeader()).toEqual('date || credit || debit || balance')
  }) 

  it('prints a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const mockTransaction = new Transaction;
    const statement = new Statement(mockTransaction);
    mockTransaction.createTransaction.mockImplementation(() => {
      return `|| ${formattedDate} || 10.00 || || 10.00`
    })
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 10.00 || || 10.00`)
  })
})