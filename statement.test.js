const Statement = require('./statement')

describe('Statement', () => {
  it('prints a header', () => {
    const statement = new Statement;
    expect(statement.printHeader()).toEqual('date || credit || debit || balance')
  }) 
})