const {Blockchain, Transaction} = require('./blockchain');

let emiCoin = new Blockchain();

emiCoin.createTransaction(new Transaction('address 1', 'address 2', 100))
emiCoin.createTransaction(new Transaction('address 2', 'address 1', 50))


console.log('\n Starting the miner...');
emiCoin.minePendingTransaction('emi address');
console.log("\nBalance of Emi is ", emiCoin.getBalanceOfAddress("emi address"));

console.log('\n Starting the miner again...');
emiCoin.minePendingTransaction('emi address');
console.log("\nBalance of Emi is ", emiCoin.getBalanceOfAddress("emi address"));




