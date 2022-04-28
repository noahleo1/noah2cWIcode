let weekdays = ['   Mo','   Di ','  Mi ','  Do  ',' Fr  ', ' Sa ', '  So'];
function printMonth(amountOfDays, startDay) {

    let days = '';
    let pre = '';

    let output = "";
    weekdays.forEach(element => {
        output += element;
    });
    console.log(output);

    for (let day = 1; day <= amountOfDays; day++) {
        if (day < 10) {
            pre = '0';
        }
        else {
            pre = '';
        }
        days = days + ' | ' + pre + day;
        startDay = 1;






        if (day % 7 == 0) {
            console.log(days);
            days = '';
        }
        else if (day == amountOfDays) {
            console.log(days)
        }




    }
}
printMonth(31, 1);
printMonth(28, 2);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(31);
printMonth(30);
printMonth(31);
printMonth(30);
printMonth(31);
