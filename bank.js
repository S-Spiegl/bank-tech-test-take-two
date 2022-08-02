class Bank {

  constructor(transaction) {
    this.balance = 0;
    this.transaction = transaction;
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

}
module.exports = Bank;