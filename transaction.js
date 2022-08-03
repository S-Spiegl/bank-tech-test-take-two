class Transaction {

  constructor() {
    this.transaction = [];
  }
  

  createTransaction(deposit, withdrawal) {

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    
      if(deposit != 0){
          this.transaction = []
          this.transaction.push(`|| ${formattedDate} || ${deposit.toFixed(2)} || || 10.00`)
      }
      else{
          return `|| ${formattedDate} || || ${withdrawal.toFixed(2)} || 10.00`
      }
  
    
  }

}

module.exports = Transaction;