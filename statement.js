class Statement {

  constructor(transaction) {
    this.transaction = transaction;
  }
  
  printHeader() {
    return 'date || credit || debit || balance'
  }

  printStatement() {
    return `date || credit || debit || balance\n${this.transaction.createTransaction()}`
  }

}

module.exports = Statement;