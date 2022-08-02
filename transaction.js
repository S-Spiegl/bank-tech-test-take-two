class Transaction {
  

  createTransaction(deposit, withdrawal, balance) {

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    
      if(deposit != 0){
        return `|| ${formattedDate} || ${deposit.toFixed(2)} || || ${balance.toFixed(2)}`
      }
      else{
        return `|| ${formattedDate} || || ${withdrawal.toFixed(2)} || ${balance.toFixed(2)}`
      }
  
    
  }

}

module.exports = Transaction;