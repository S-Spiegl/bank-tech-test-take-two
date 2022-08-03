class Statement {

  constructor() {
    // this.transaction = transaction;
    this.allTransactions = []
  }
  
  printHeader() {
    return 'date || credit || debit || balance'
  }

  pushStatement(transaction) {
    this.allTransactions.unshift(transaction)
  }

  printStatement() {
    return this.printHeader() + "\n" + this.allTransactions;
  }

}

module.exports = Statement;