
var date = new Date();

// alert(date.getDate());

// var days = ['Воскр', "Пн"]

// alert(days[date.getDay()]);

// alert(date.getFullYear());
// alert(date.getHours());
// alert(date.getMinutes());
// alert(date.getMilliseconds());

// var month = ['Январь', 'Февраль']
// alert(month[date.getMonth()]);
// alert(date.getSeconds());
// alert(date.getTime());
// alert(date.getTimezoneOffset());

// date.setDate(10);
// date.setFullYear(2078,7,21);
// date.setHours(18);
// date.setMinutes(32);
// date.setMonth(11,3);




// console.log(date.toJSON());
// console.log(date.toLocaleDateString()); //возвращает дату в соотв с локальными настройками браузера.
// console.log(date.toLocaleTimeString()); возвращает время
// console.log(Date.now()); //время в секундах с начала эпохи 1970г
// console.log(Date.parse(date.toString())); //текущая дата в мс

function displayTime() {
    var now = new Date(); //получаем объект date

    var div = document.getElementById("clock"); //обращаемся к пустому диву «часы»

    div.innerHTML = now.toLocaleTimeString(); //строковое представление времени

    setTimeout(displayTime,1000); //циклически вызываем функцию на исполнение с интервалом в 1 сек
}

//реализация таймера

function displayTime2() {

    var now = new Date(); //получаем объект date

    var div = document.getElementById("clock"); //обращаемся к пустому диву «часы»

    var sDate = new Date(2019,11,31); //объявление переменной, до какой даты считать

    var timer = sDate.getTime() - now.getTime(); //вычитаем разность в милисеках от будущей даты до сегодняшней
//приводим разность в милисеках к дням (-66734207489ms)

//-66734207489ms/(часы*минуты*секунды*милисекунды)= 322
    var days = parseInt(timer/(24*60*60*1000)); //парсеинт приводит значние таймера к целочисленному значению (-66734207489ms).
    // alert(days);

//-66734207489ms/(минуты*секунды*милисекунды)%24(убираем подсчитанные дни.) = 14, и нихуя не понятно, почему получилось это 14

    var hours = parseInt(timer/(60*60*1000))%24;
    // alert(hours);

    var min = parseInt(timer/(60*1000))%60;

    var sec = parseInt(timer/(1000))%60;

    div.innerHTML = days + ' : ' + hours + ' : ' + min + ' : ' + sec; //строковое представление времени

    setTimeout(displayTime2,1000); //циклически вызываем функцию на исполнение с интервалом в 1 сек
}

window.onload = displayTime2; //запуск скрипта после полной прогрузки страницы