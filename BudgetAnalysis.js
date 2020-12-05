const bi = require("./BudgetItem");
const Income = require("./Income");
const Expense = require("./Expense");

class BudgetAnalysis
{
    constructor() {
      var items = [];
      this.addItem = function (item){
        items.push(item);
      }
      this.getByMonth = function (month){
        var returned = [];
      for (i=0; i<items.length;i++){
        if (items[i].getMonth() == month){
          returned.push(items[i]);
        }
      }
      return returned;
    };
    this.getByYear = function (year){
      var returned = [];
    for (i=0; i<items.length;i++){
      if (items[i].getYear() == year){
        returned.push(items[i]);
      }
    }
    return returned;
  };
  this.MonthRev = function (month) {
    var sum = 0;
    for (i=0; i<items.length;i++){
      if (items[i].getMonth() == month){
        if (items[i] instanceof Income){
          sum += Number(items[i].getAmount());
        }
        else{
          sum -= Number(items[i].getAmount());
        }
      }
  }
  return sum;
};
this.YearRev = function (year) {
  var sum = 0;
  for (i=0; i<items.length;i++){
    if (items[i].getYear() == year){
      if (items[i] instanceof Income){
        sum += Number(items[i].getAmount());
      }
      else{
        sum -= Number(items[i].getAmount());
      }
    }
}
return sum;
};
}
};
module.exports = BudgetAnalysis;
