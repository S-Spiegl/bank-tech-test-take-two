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
    if(this.balance > funds){
    this.withdrawal = 0;
    this.deposit = 0;
    this.withdrawal -= funds;
    this.balance -= funds;
    this.#generateTransaction(this.deposit, this.withdrawal, this.balance)
    }
    else {throw(`Insufficient funds. You can withdraw £${this.balance}`)}
  }
  
  #generateTransaction(deposit, withdrawal, balance) {
    this.transaction.createTransaction(deposit, withdrawal, balance);
  }
}
module.exports = Bank;