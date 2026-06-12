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
        default:
            day="Invalid day number";
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
weekday(8) will return "Invalid day number"
*/

//function sequencing
function sequentialSizes(val){
    var answer="";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer="Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer="high";
            break;
    }
    return answer;
}

/* outputs  
sequentialSizes(1) will return "Low"
sequentialSizes(2) will return "Low"
sequentialSizes(3) will return "Low"
sequentialSizes(4) will return "Mid"
sequentialSizes(5) will return "Mid"
sequentialSizes(6) will return "Mid"
sequentialSizes(7) will return "High"
sequentialSizes(8) will return "High"
sequentialSizes(9) will return "High"
*/