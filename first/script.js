//"use strict";

let money, time;

function start() {
	money = +prompt('Сколько ты получаешь денег в месяц?', '');
	//time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == null){
		money = +prompt('Сколько ты получаешь денег в месяц?', '');
	}
}

let appData = {
	bud : money,
	//timeData: time,
	expenses : {},
	optionalExpenses : {},
	income: [],
    savings : false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            
            if(typeof(a) != null && typeof(b) != null) {
                console.log('done');
                appData.expenses[a] = b;
            } else{
                i--;
            }
        }
    },
    detectDayBudget:  function(){
        appData.moneyPerDay = (appData.bud / 30).toFixed(1);
	    alert(appData.moneyPerDay);
    },

    checkSavings: function(){
        if(appData.savings == true) {
            let save = +prompt("Сумма накоплений"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц = " + appData.monthIncome);
        }
    },
    chooseOptExpense: function(){
        for(let i = 0; i < 1; i++){
            appData.expenses[i] = prompt("Статья необязательных расходов");
        }
    },
    chooseIncome: function() {
        let items = prompt("Доп. доход", "");

        if(items != null || items != ''){
            appData.income = items.split(' ');
            appData.income.sort();
            appData.income.forEach((item, index, array) => {
                let i = Number(index);
                alert(`${item} имеет позицию ` + ++i +` в ${array}`);
            });
            
        }
        
    }
};

for(key in appData){
    console.log("Наша программа включает в себя данные: "+ key);
}