let yeard = prompt("Enter a Year and Month only: ");
let day;
let year = yeard.slice(0, 04);
let month = yeard.slice(05, 07);

if (month == "02") {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    day = 29;
  } else {
    day = 28;
  }
} else if (month == "04" || month == "06" || month == "11" || month == "09") {
  day = 30;
} else {
  day = 31;
}
document.write(day);