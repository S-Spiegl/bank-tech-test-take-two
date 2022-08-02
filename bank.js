class Bank {

  constructor(transaction, statement) {
    this.balance = 0;
    this.transaction = transaction;
    this.statement = statement;
  }

  depositFunds(funds) {
    this.balance += funds;
    this.generateTransaction(funds)
  }

  printStatement() {
    return this.balance;
  }

  generateTransaction() {
    this.transaction =  '|| || 10.00 || || 10.00';
  }

  printHeader() {
    return this.statement.printHeader()
  }

}
module.exports = Bank;