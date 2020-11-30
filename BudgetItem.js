class BudgetItem
{
    constructor(newAmount,newMonth,newYear) {
        let _amount;
        let _month;
        let _year;

        this.setAmount = function(amount){
            _amount = (amount > 0)?amount:0;
        };
        this.setMonth = function (month){
            _month = (month > 0)?month:1;
        }
        this.setYear = function (year){
            _year = (year > 0)?year:0;
        }

        this.getAmount = function(){
            return _amount;
        };
        this.getMonth = function(){
            return _month;
        };
        this.getYear = function(){
            return _year;
        };

        this.setAmount(newAmount);
        this.setMonth(newMonth);
        this.setYear(newYear);
    }
};

module.exports = BudgetItem;