class Transaction {

  constructor() {
    this.transaction = [];
  }
  

  #registerDeposit(deposit, balance) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    this.transaction = []
    this.transaction.push(`|| ${formattedDate} || ${deposit.toFixed(2)} || || ${balance.toFixed(2)}`)
  }

 #registerWithdrawal(withdrawal, balance) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    this.transaction = []
    this.transaction.push(`|| ${formattedDate} || || ${withdrawal.toFixed(2)} || ${balance.toFixed(2)}`)
  }
  
  createTransaction(deposit, withdrawal, balance) {    
      if(deposit != 0){
        this.#registerDeposit(deposit, balance);
      }
      else{
        this.#registerWithdrawal(withdrawal, balance)
      }
    }

    

}

module.exports = Transaction;