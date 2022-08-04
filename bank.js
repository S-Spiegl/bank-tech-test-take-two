class Bank {

  constructor(transaction, statement) {
    this.balance = 0
    this.transaction = transaction;
    this.statement = statement;
  }

  depositFunds(funds) {
    this.balance += funds;
    this.#generateTransaction(funds, 0, this.balance)
  }

  withdrawFunds(funds) {
    if(this.balance > funds){
    this.balance -= funds;
    this.#generateTransaction(0, funds, this.balance)
    }
    else {throw(`Insufficient funds. You can withdraw £${this.balance}`)}
  }
  
  #generateTransaction(deposit, withdrawal, balance) {
    this.transaction.logTransaction(deposit, withdrawal, balance);
  }

  printStatement() {
    this.statement.addTransactionToStatement(this.transaction.transaction)
    return this.statement.printStatement() 
  }
}
module.exports = Bank;