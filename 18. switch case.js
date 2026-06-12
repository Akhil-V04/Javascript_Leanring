function weekday(num){
    var day;
    switch(num){
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        case 7:
            day="Sunday";
            break;
    }
    return day;
}

/* outputs
weekday(1) will return "Monday"
weekday(2) will return "Tuesday"
weekday(3) will return "Wednesday"
weekday(4) will return "Thursday"
weekday(5) will return "Friday"
weekday(6) will return "Saturday"
weekday(7) will return "Sunday"
*/