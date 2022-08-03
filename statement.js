class Statement {

  constructor(transaction) {
    this.transaction = transaction;
    this.statements = []
  }
  
  printHeader() {
    return 'date || credit || debit || balance'
  }

  pushStatement() {
    const transaction = `date || credit || debit || balance\n${this.transaction.createTransaction()}`
    this.statements.push(transaction)
  }

}

module.exports = Statement;