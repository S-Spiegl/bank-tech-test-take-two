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
    this.deposit += funds;
    this.balance += funds;
    this.generateTransaction(this.deposit, this.withdrawal, this.balance)
  }

  withdrawFunds(funds) {
    this.withdrawal = 0;
    this.withdrawal -= funds;
    this.generateTransaction(this.deposit, this.withdrawal, this.balance)
  }
  
  //next to test is this... need to mock its dependencies. Problem is whether
  //you can do auto-mocks for this, since it is relying on variables...
  printStatement() {
    return this.balance;
    //this should eventually return statement.printStatement,
    //which will return the header followed by the contents of statement.allTransactions
  }

  generateTransaction(deposit, withdrawal, balance) {
    this.transaction.createTransaction(deposit, withdrawal, balance);
    //this creates a transaction in the transactions array in the the transaction class
    //this is then accessed by statement to build a list of all transactions
  }

  printHeader() {
    return this.statement.printHeader()
    //irrelevant
  }

}
module.exports = Bank;