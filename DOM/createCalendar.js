//Fn createCalendar(elem, year, month) creates Calendar table by month and dock table to elem

function createCalendar(elem, year, month){

    const weekDays = ['пн','вт','ср','чт','пт','сб','вс'];
    let resultStr = '';

    for(let i=0; i < weekDays.length; i++){
        resultStr += '<th>' + weekDays[i] + '</th>';
    }

    // Создаем объект Date с заданными компонентами в местном часовом поясе
    const d = new Date(year, month-1);
    //console.log(d.getDay());

    // День недели 1го числа текущего месяца (cуббота 1 сент) = 6
    let startWeekDay = d.getDay();
    //console.log(startWeekDay);

    // наш день недели соответствует числу
    if (startWeekDay === 0) {
        startWeekDay = 7;
    }

    // Кол-во дней в месяце
    let daysThisMonth = new Date(year, month, 0);
    daysThisMonth = daysThisMonth.getDate();

    // Кол-во ячеек в таблице: кол-во дней в мес + день недели 1го числа - 1
    for(let i=1; i <= daysThisMonth+startWeekDay-1; i++){
        // рисуем таблицу с ячейки первого числа
        if (i>=startWeekDay) {
            switch (i % 7) {
                case 1:
                    resultStr += `<tr><td>${i-startWeekDay+1}</td>`;
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    resultStr += `<td>${i-startWeekDay+1}</td>`;
                    break;
                case 0:
                    resultStr += `<td>${i-startWeekDay+1}</td></tr>`;
                    break;

            }
        }
        // если нужно, то перед первым числом добавляем пустые ячейки
        else if( i < startWeekDay){
            switch (i % 7) {
                case 1:
                    resultStr += `<tr><td></td>`;
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    resultStr += `<td></td>`;
                    break;
                case 0:
                    resultStr += `<td></td></tr>`;
                    break;

            }
        }

    }

    // дорисовываем таблицу пустыми ячейками вконце, если нужно
    let step=0;
    while ( ((daysThisMonth+startWeekDay-1+step) % 7) !== 0 ){
        switch ((daysThisMonth+startWeekDay-1+step) % 7) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                resultStr += `<td></td>`;
                break;
            case 6:
                resultStr += `<td></td></tr>`;
                break;

        }
        step++;
    }

    resultStr = `<table><tr>${resultStr}</tr></table>`;
    elem.innerHTML = resultStr;
}

createCalendar(cal, 2012, 9);




