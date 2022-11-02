
const leapYear = (year) => {

  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    console.log(`it is indeed a lep year`);
  else
    console.log(`This is not a leap year`);
}

leapYear(2012);
leapYear(2100);
leapYear(2400);