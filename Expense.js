const BudgetItem = require("./BudgetItem");

class Expense extends BudgetItem
{
    constructor(amount,month,year,newDestination,newSpender) {
        super(amount,month,year);
        let _destination;
        let _spender;

        this.setDest = function(destination){
            _destination = (destination > 0)?destination:0;
        };
        this.setSpender = function(spender){
            _spender = (spender > 0)?spender:0;
        };
        this.getDest = function(){
            return _destination;
        };
        this.getSpender= function(){
            return _spender;
        };
        this.setDest(newDestination);
        this.setSpender(newSpender);
    }
};
module.exports = Expense;