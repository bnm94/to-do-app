let calendarNode = null;
const mainNode = document.querySelector('main');
const months = [
    'January',
    'Fabruary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const calendarState = {
    weeks: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'],
    month: "",
    days: []
}

function setMonth(monthNum) {
    calendarState.month = months[monthNum];
}

function setDays(date) {
    const days = [];
    const tempDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    );
    const dateDays = tempDate.getDate();
    tempDate.setDate(1);
    const dateFirstDay = tempDate.getDay();
    for(let i = 0; i < dateFirstDay+6; i++) {
        days.push({value: ""});
    }
    
    for(let i = 1; i <= dateDays; i++) {
        days.push({value: i});
    }
    calendarState.days = days;
}

function setState(date) {
    setMonth(date.getMonth());
    setDays(date);
    if(calendarNode) {
        const newCalendar = drawCalendar();
        mainNode.replaceChild(newCalendar, calendarNode);
        calendarNode = newCalendar;
    } else {
        calendarNode = drawCalendar();
        mainNode.appendChild(calendarNode);
    }
    console.log(calendarState);
}


function drawMonth() {
    const monthNode = document.createElement('div');
    monthNode.className = 'calendar__month';
    monthNode.innerText = calendarState.month;
    return monthNode;
}

function drawWeeks() {
    const weeksNode = document.createElement('div');
    weeksNode.className = 'week';
    for(let i = 0; i < calendarState.weeks.length; i++) {
        const weekItemNode = document.createElement('div');
        weekItemNode.className = 'week__item';
        weekItemNode.innerText = calendarState.weeks[i];
        weeksNode.appendChild(weekItemNode);
    }
    return weeksNode;
}

function drawDays() {
    const dayListNode = document.createElement('div');
    dayListNode.className = 'days';
    calendarState.days.forEach((el) => {
        const dayNode = document.createElement('button');
        dayNode.className = 'day';
        console.log(el.value)
        dayNode.innerText = el.value;
        dayListNode.appendChild(dayNode);
    })
    return dayListNode;
}

function drawCalendar() {
    const calendarNode = document.createElement('div');
    calendarNode.className = 'calendar';
    calendarNode.appendChild(drawMonth());
    calendarNode.appendChild(drawWeeks());
    calendarNode.appendChild(drawDays());
    return calendarNode;
}

const calendar = drawCalendar();
mainNode.appendChild(calendar);