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
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    const statement = new Statement(mockTransaction);
    statement.pushStatement()
    expect(statement.allTransactions[0]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints two transactions', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    const statement = new Statement(mockTransaction);
    statement.pushStatement()
    mockTransactionTwo = {
      transaction: ([
        `|| ${formattedDate} || 20.00 || || 20.00`
      ]),
    }
    statement(mockTransactionTwo);
    statement.pushStatement()
    expect(statement.allTransactions[0]).toEqual(`|| ${formattedDate} || 20.00 || || 20.00`)
    expect(statement.allTransactions[1]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints a header', () => {
    const mockTransaction = new Transaction;
    mockTransaction.createTransaction.mockImplementation(() => {return `|| ${formattedDate} || ${deposit.toFixed(2)} || || ${balance.toFixed(2)}`})
    const statement = new Statement(mockTransaction);
    expect(statement.printHeader()).toEqual('date || credit || debit || balance')
  })

  it('prints a header and a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    const statement = new Statement(mockTransaction);
    statement.pushStatement()
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints a header and two transactions', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    const statement = new Statement(mockTransaction);
    statement.pushStatement()
    // const mockTransactionTwo = {
    //   transaction: ([
    //     `|| ${formattedDate} || 20.00 || || 20.00`
    //   ]),
    // }
    // statement.pushStatement()
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 20.00 || || 20.00\n|| ${formattedDate} || 10.00 || || 10.00`)
  })
})