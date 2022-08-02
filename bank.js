class Bank {

  constructor() {
    this.balance = 0;
  }

  depositFunds(funds) {
    this.balance += funds;
  }

  printStatement() {
    return this.balance;
  }

}
module.exports = Bank;