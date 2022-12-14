const Statement = require('./statement')
const Transaction = require('./transaction')
jest.mock('./transaction')

describe('Statement', () => {
  // it('prints a header', () => {
  //   const statement = new Statement;
  //   expect(statement.printHeader()).toEqual('date || credit || debit || balance')
  // }) 

  it('prints a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const statement = new Statement;
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    statement.addTransactionToStatement(mockTransaction.transaction[0])
    expect(statement.printStatement().split('\n')[1]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
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
    statement.addTransactionToStatement(mockTransaction.transaction[0])
    const mockTransactionTwo = {
      transaction: ([
        `|| ${formattedDate} || 20.00 || || 20.00`
      ]),
    }
    statement.addTransactionToStatement(mockTransactionTwo.transaction[0])
    expect(statement.printStatement().split('\n')[1]).toEqual(`|| ${formattedDate} || 20.00 || || 20.00`)
    expect(statement.printStatement().split('\n')[2]).toEqual(`|| ${formattedDate} || 10.00 || || 10.00`)
  })

  it('prints a header and a transaction', () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const statement = new Statement;
    const mockTransaction = {
      transaction: ([
        `|| ${formattedDate} || 10.00 || || 10.00`
      ]),
    }
    statement.addTransactionToStatement(mockTransaction.transaction[0])
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
    statement.addTransactionToStatement(mockTransaction.transaction[0])
    const mockTransactionTwo = {
      transaction: ([
        `|| ${formattedDate} || 20.00 || || 20.00`
      ]),
    }
    statement.addTransactionToStatement(mockTransactionTwo.transaction[0])
    expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n|| ${formattedDate} || 20.00 || || 20.00\n|| ${formattedDate} || 10.00 || || 10.00`)
  })
})