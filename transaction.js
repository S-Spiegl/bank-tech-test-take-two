class Transaction {

  createTransaction(deposit, withdrawal) {
    
      if(deposit != 0){
        return `|| || ${deposit.toFixed(2)} || || ${deposit.toFixed(2)}`
      }
      else{
        return `|| || || ${withdrawal.toFixed(2)} || ${deposit.toFixed(2)}`
      }
  
    
  }

}

module.exports = Transaction;