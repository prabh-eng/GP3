const fs = require('fs');
const bi = require("./BudgetItem");
const Income = require("./Income");
const Expense = require("./Expense");
const ba = require("./BudgetAnalysis");
var data = require("./Sample.json")

var budget = [];

for (i=0;i<5;i++){
  if (data[i].type == "Income"){
    budget.push(new Income(data[i].amount, data[i].month, 2018, 0));
  }
  else{
    budget.push(new Expense(data[i].amount, data[i].month, 2018, 0, 0));
  }
}
for (i=0;i<5;i++){
  if (data[i].type == "Income"){
    budget.push(new Income(data[i].amount, data[i].month, 2019, 0));
  }
  else{
    budget.push(new Expense(data[i].amount, data[i].month, 2019, 0, 0));
  }
}

var analysis = new ba;
for (i=0;i<budget.length;i++){
  analysis.addItem(budget[i]);
}
var yearBudget = [{year:2018,revenue:analysis.YearRev(2018)},{year:2019,revenue:analysis.YearRev(2019)}]
var toWrite = JSON.stringify(yearBudget);
fs.writeFile('Budget.json',toWrite, ()=>{console.log('file written')});
