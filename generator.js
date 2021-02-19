let date = new Date();
let startDateElement = document.querySelector("#startDate");
let endDateElement = document.querySelector("#endDate");
let startTimeHourElement = document.querySelector("#startTimeHour");
let startTimeMinuteElement = document.querySelector("#startTimeMinute");
let endTimeHourElement = document.querySelector("#endTimeHour");
let endTimeMinuteElement = document.querySelector("#endTimeMinute");
let dateElements = [startDateElement, endDateElement];
for (const element of dateElements) {
    if(element.type === 'date') {
        element.valueAsDate = date;
    }
    element.addEventListener('change', function() {
        console.log(this.valueAsDate);
        console.log(this.value);
    });
}

for (const element of dateElements) {
    if(element.type === 'date') {
        element.valueAsDate = date;
    }
    element.addEventListener('change', function() {
        console.log(this.valueAsDate);
        console.log(this.value);
    });
}

/* create the correct options + values for the time Elements */
createOptionsInSelect(startTimeHourElement, 24);
createOptionsInSelect(startTimeMinuteElement, 59);
createOptionsInSelect(endTimeHourElement, 24);
createOptionsInSelect(endTimeMinuteElement, 59);






