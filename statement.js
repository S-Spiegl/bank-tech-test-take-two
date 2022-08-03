class Statement {

  constructor() {
    // this.transaction = transaction;
    this.allTransactions = []
  }
  
  #printHeader() {
    return 'date || credit || debit || balance'
  }

  pushStatement(transaction) {
    this.allTransactions.unshift(transaction)
  }

  printStatement() {
    const mappedTransactions = this.allTransactions.join("\n")
    console.log(mappedTransactions)
    return this.#printHeader() + "\n" + mappedTransactions
  }

}

module.exports = Statement;