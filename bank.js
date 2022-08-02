class Bank {

  constructor(transaction, statement) {
    this.deposit = 0;
    this.withdrawal = 0;
    this.transaction = transaction;
    this.statement = statement;
  }

  depositFunds(funds) {
    this.deposit += funds;
    this.generateTransaction(this.deposit, this.withdrawal)
  }

  withdrawFunds(funds) {
    this.withdrawal -= funds;
    this.generateTransaction(this.deposit, this.withdrawal)
  }

  printStatement() {
    return this.balance;
  }

  generateTransaction(deposit, withdrawal, balance) {
    this.transaction.createTransaction(deposit, withdrawal, balance);
  }

  printHeader() {
    return this.statement.printHeader()
  }

}
module.exports = Bank;