const BudgetItem = require("./BudgetItem");

class Income extends BudgetItem
{
    constructor(amount,month,year,newSource) {
        super(amount,month,year);
        let _source;

        this.setSource = function(source){
            _source = (source > 0)?source:0;
        };
        this.getSource = function(){
            return _source;
        };
        this.setSource(newSource);

    }
};
module.exports = Income;