class Statement {

  constructor() {
    this.allTransactions = []
  }
  
  #printHeader() {
    return 'date || credit || debit || balance'
  }

  addTransactionToStatement(transaction) {
    this.allTransactions.unshift(transaction)
  }

  printStatement() {
    const mappedTransactions = this.allTransactions.join("\n")
    return this.#printHeader() + "\n" + mappedTransactions
  }

}

module.exports = Statement;