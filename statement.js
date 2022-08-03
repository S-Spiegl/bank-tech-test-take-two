class Statement {

  constructor() {
    // this.transaction = transaction;
    this.allTransactions = []
  }
  
  #printHeader() {
    return 'date || credit || debit || balance'
  }

  #pushStatement(transaction) {
    this.allTransactions.unshift(transaction)
  }

  printStatement() {
    if(this.transaction.transaction.length === 1){
      this.#pushStatement(this.transaction.transaction)
    }
    const mappedTransactions = this.allTransactions.join("\n")
    return this.#printHeader() + "\n" + mappedTransactions
  }

}

module.exports = Statement;