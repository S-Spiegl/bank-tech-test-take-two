const Statement = require('./statement')
const Transaction = require('./transaction')
jest.mock('./transaction')

describe('Statement', () => {
  it('prints a header', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 60.00`
      ]),
    }
    const statement = new Statement(mockTransaction);
    statement.pushStatement(mockTransaction.transaction)
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 10.00 || || 60.00`)
  }) 

  it('prints a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    const statement = new Statement;
    statement.pushStatement(mockTransaction.transaction[0])
    expect(statement.allTransactions[0]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints two transactions', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const statement = new Statement;
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    statement.pushStatement(mockTransaction.transaction[0])
    const mockTransactionTwo = {
      transaction: ([
        `|| ${formattedDate} || 20.00 || || 20.00`
      ]),
    }
    statement.pushStatement(mockTransactionTwo.transaction[0])
    expect(statement.allTransactions[0]).toEqual(`|| ${formattedDate} || 20.00 || || 20.00`)
    expect(statement.allTransactions[1]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints a header and a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const statement = new Statement();
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    statement.pushStatement(mockTransaction.transaction[0])
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints a header and two transactions', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const statement = new Statement;
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    statement.pushStatement(mockTransaction.transaction[0])
    const mockTransactionTwo = {
      transaction: ([
        `|| ${formattedDate} || 20.00 || || 20.00`
      ]),
    }
    statement.pushStatement(mockTransactionTwo.transaction[0])
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 20.00 || || 20.00\n|| ${formattedDate} || 10.00 || || 10.00`)
  })
})