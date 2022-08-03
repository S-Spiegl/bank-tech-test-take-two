  $$$$$$$$   $$$$$$$$$$   $$$   $$$$$$$$$    $$$$$$$$$$$   $$$                               
  $$$$$$$$   $$$$$$$$$$   $$$   $$$$$$$$$    $$$$$$$$$$$   $$$          
  $$         $$.     $$   $$$   $$           $$$           $$$           
  $$         $$      $$   $$$   $$           $$$           $$$          
  $$$$$$$$   $$$$$$$$$$   $$$   $$$$$$$$$    $$$    $$$$   $$$           
  $$$$$$$$   $$$$$$$$$$   $$$   $$$$$$$$$    $$$    $$$$   $$$           
        $$   $$           $$$   $$           $$$      $$   $$$           
        $$   $$           $$$   $$           $$$      $$   $$$           
  $$$$$$$$   $$           $$$   $$$$$$$$$    $$$$$$$$$$$   $$$$$$$$$$$   
  $$$$$$$$   $$           $$$   $$$$$$$$$    $$$$$$$$$$$   $$$$$$$$$$$   
  
   $$$$$$$$$$$$    $$$$$$$$$$$$    $$$$$$$$$$$$$    $$$     $$$ 
   $$$$$$$$$$$$    $$$$$$$$$$$$    $$$$$$$$$$$$$    $$$    $$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$   $$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$  $$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$ $$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$$$$
   $$$$$$$$$$$$    $$$$$$$$$$$$    $$$       $$$    $$$$$$
   $$$$$$$$$$$$    $$$$$$$$$$$$    $$$       $$$    $$$$$$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$$$$$$
   $$$      $$$    $$$      $$$    $$$       $$$    $$$   $$$
   $$$$$$$$$$$$    $$$      $$$    $$$       $$$    $$$    $$$
   $$$$$$$$$$$$    $$$      $$$    $$$       $$$    $$$     $$$


N.B
In order to keep the classes loosely coupled, I am calling functions from their own class where possible. E.g. it would have made for an easier CLI UX if I ran all the functions from the bank, but since this would ideally be linked to an interface, I decided just to call these functions from their own classes. E.g. printStatement() is called from statement. 

Instructions:

Install dependencies:
npm install

Create and instantiate the classes:

const Bank = require('./bank')
const Transaction = require('./transaction')
const Statement = require('./statement')
const transaction = new Transaction;
const statement = new Statement;
const bank = new Bank(transaction, statement);

Deposit/withdraw funds:
e.g. 
bank.depositFunds(10)
statement.pushStatement(transaction.transaction)

bank.withdrawFunds(5)
statement.pushStatement(transaction.transaction)

N.B you must run statement.pushStatement(transaction.transaction) after each deposit/withdrawal. The transaction class only holds one transaction at a time, so these need to be pushed to the list of transactions, held in the statement class, after each deposit/withdrawal.

View statement:
statement.printStatement()

to do...
private/public classes
mock all dependencies
edge cases - negative funds, irregular inputs etc
mock the date
check dependency injection 

-------------------


N.B
This is the README for the branch for DIing all dependencies straight into bank

Instructions:

Install dependencies:
npm install

Create and instantiate the classes:

const Bank = require('./bank')
const Transaction = require('./transaction')
const Statement = require('./statement')
const transaction = new Transaction;
const statement = new Statement(transaction);
const bank = new Bank(transaction, statement);
bank.depositFunds(10)
statement.pushStatement()
statement.allTransactions


bank.withdrawFunds(5)
statement.pushStatement(transaction.transaction)
statement.allTransactions

N.B you must run statement.pushStatement(transaction.transaction) after each deposit/withdrawal. The transaction class only holds one transaction at a time, so these need to be pushed to the list of transactions, held in the statement class, after each deposit/withdrawal.

View statement:
statement.printStatement()

to do...
private/public classes
mock all dependencies
edge cases - negative funds, irregular inputs etc
mock the date
check dependency injection 
