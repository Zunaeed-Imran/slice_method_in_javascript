let yeard = prompt("Enter a year: ");
let month = yeard.slice(05, 07);
let year = yeard.slice(0, 04);
let day;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  if (month == "02") {
    day = 29;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    day = 30;
  } else {
    day = 31;
  }
} else {
  if (month == "02") {
    day = 28;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    day = 30;
  } else {
    day = 31;
  }
}
document.write(day);