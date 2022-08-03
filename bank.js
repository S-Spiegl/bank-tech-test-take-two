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
    this.generateTransaction(this.deposit, this.withdrawal)
  }

  withdrawFunds(funds) {
    this.withdrawal = 0;
    this.withdrawal -= funds;
    this.generateTransaction(this.deposit, this.withdrawal)
  }
  //statement needs to return a balance that can be used for the transaction... 
  //can I have statement as a dependency of transaction if transaction is a dependency of 
  //statement?

  //if not, then I'll need to add the balance in in the statement class, which 
  //will be a pain... 

  //solution: increment a balance variable in bank. Every time a transaction is registered
  //this gets altered, and that info gets passed to generateTransaction along
  //with deposit/withdrawal

  //next to test is this... need to mock its dependencies. Problem is whether
  //you can do auto-mocks for this, since it is relying on variables...
  printStatement() {
    return this.balance;
    //this should eventually return statement.printStatement,
    //which will return the header followed by the contents of statement.allTransactions
  }

  generateTransaction(deposit, withdrawal) {
    this.transaction.createTransaction(deposit, withdrawal);
    //this creates a transaction in the transactions array in the the transaction class
    //this is then accessed by statement to build a list of all transactions
  }

  printHeader() {
    return this.statement.printHeader()
    //irrelevant
  }

}
module.exports = Bank;