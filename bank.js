class Bank {

  constructor(transaction, statement) {
    this.deposit = 0;
    this.withdrawal = 0;
    this.balance = 0
    this.transaction = transaction;
    this.statement = statement;
  }

  depositFunds(funds) {
    this.deposit = 0;
    this.withdrawal = 0;
    this.deposit += funds;
    this.balance += funds;
    this.#generateTransaction(this.deposit, this.withdrawal, this.balance)
  }

  withdrawFunds(funds) {
    this.withdrawal = 0;
    this.deposit = 0;
    this.withdrawal -= funds;
    this.balance -= funds;
    this.#generateTransaction(this.deposit, this.withdrawal, this.balance)
  }

  printStatement() {
    this.statement.printStatement()
  }
  
  #generateTransaction(deposit, withdrawal, balance) {
    this.transaction.createTransaction(deposit, withdrawal, balance);
    this.statement.pushStatement(this.transaction.transaction)
    console.log(this.transaction.transaction)
  }
}
module.exports = Bank;