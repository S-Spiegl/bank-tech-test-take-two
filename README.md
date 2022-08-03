# Bank Tech Test

### A practice tech-test, based upon the following specifications:

#### Requirements
````
- You should be able to interact with your code via a REPL like IRB or Node. 
- (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).
````

#### Approach

I chose to split the problem into three classes initially: a bank class, a transaction class, and a statement class.
The statement and transaction would be dependency-injected into the bank class to reduce coupling.  

#### Instructions:

###### Install dependencies:
```npm install```

###### Create and instantiate the classes:

```
const Bank = require('./bank')
const Transaction = require('./transaction')
const Statement = require('./statement')
const transaction = new Transaction;
const statement = new Statement;
const bank = new Bank(transaction, statement);
```

###### Deposit/withdraw funds:
e.g. 
```bank.depositFunds(10)```
or
```
bank.withdrawFunds(5)
```

###### View statement:

```
bank.printStatement()
```
