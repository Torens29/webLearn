//"use strict";
let money = +prompt('Сколько ты получаешь денег в месяц?', '');
	//time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	bud : money,
	//timeData: time,
	expenses : {},
	optionalExpenses : {},
	income: [],
	savings : false
};

for (let i = 0; i < 2; i++){
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if(typeof(a) != null && typeof(b) != null) {
		console.log('done')
		appData.expenses[a] = b;
	} else{

	}

}

appData.moneyPerDay = appData.bud / 30;
alert(appData.moneyPerDay);

