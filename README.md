# Bank Tech Test

Instructions:

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

to do...
edge cases - irregular inputs etc
mock the date
