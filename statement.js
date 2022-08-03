class Statement {

  constructor(transaction) {
    this.transaction = transaction;
    this.allTransactions = []
  }
  
  printHeader() {
    return 'date || credit || debit || balance'
  }

  pushStatement() {
    this.allTransactions.unshift(this.transaction.transaction[0])
  }

  printStatement() {
    const mappedTransactions = this.allTransactions.join("\n")
    return this.printHeader() + "\n" + mappedTransactions
  }

}

module.exports = Statement;