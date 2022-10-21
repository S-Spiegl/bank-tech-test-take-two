class Bank {

  #balance;
  #transaction;
  #statement;

  constructor(transaction, statement) {
    this.#balance = 0
    this.#transaction = transaction;
    this.#statement = statement;
  }

  getBalance() {
    return this.#balance
  }

  #incrementBalance(funds) {
    this.#balance += funds;
  }

  #decrementBalance(funds) {
    this.#balance -= funds;
  }

  depositFunds(funds) {
    this.#incrementBalance(funds)
    this.#generateTransaction(funds, 0, this.#balance)
  }

  withdrawFunds(funds) {
    if(funds <= 0){
      throw(`Enter a number greater than 0`)}
    else if(this.#balance <= funds){
      throw(`Insufficient funds. You can withdraw £${this.#balance}`)}
    else{
    this.#decrementBalance(funds);
    this.#generateTransaction(0, funds, this.#balance)
    }
  }
  
  #generateTransaction(deposit, withdrawal, balance) {
    this.#transaction.logTransaction(deposit, withdrawal, balance);
    this.#statement.addTransactionToStatement(this.#transaction.transaction);
  }

  printStatement() {
    return this.#statement.printStatement() 
  }
}
module.exports = Bank;