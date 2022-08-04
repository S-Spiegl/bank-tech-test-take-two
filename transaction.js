class Transaction {

  constructor() {
    this.transaction = [];
  }
  

  logTransaction(deposit, withdrawal, balance) {

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    
      if(deposit != 0){
          this.transaction = []
          this.transaction.push(`|| ${formattedDate} || ${deposit.toFixed(2)} || || ${balance.toFixed(2)}`)
      }
      else{
          this.transaction = []
          this.transaction.push(`|| ${formattedDate} || || ${withdrawal.toFixed(2)} || ${balance.toFixed(2)}`)
      }
    }

}

module.exports = Transaction;