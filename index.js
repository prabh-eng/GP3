const fs = require('fs');
const bi = require("./BudgetItem");
const income = require("./Income");
const expense = require("./Expense");
const ba = require("./BudgetAnalysis");
var data = require("./Sample.json")

var budget = [];

for (i=0;i<5;i++){
  if (names[i].type == "Income"){
    budget.push(new Income(names[i].amount, names[i].month, 2018, 0));
  }
  else{
    budget.push(new Expense(names[i].amount, names[i].month, 2018, 0, 0));
  }
}
for (i=0;i<5;i++){
  if (names[i].type == "Income"){
    budget.push(new Income(names[i].amount, names[i].month, 2019, 0));
  }
  else{
    budget.push(new Expense(names[i].amount, names[i].month, 2019, 0, 0));
  }
}

var analysis = new BudgetAnalysis;
for (i=0;i<budget.length;i++){
  analysis.addItem(budget[i]);
}
var yearBudget = [{year:2018,revenue:analysis.YearRev(2018)},{year:2019,revenue:analysis.YearRev(2019)}]
var toWrite = JSON.stringify(yearBudget);
fs.writeFile('Budget.json',toWrite) => {
  console.log('file written')
}
