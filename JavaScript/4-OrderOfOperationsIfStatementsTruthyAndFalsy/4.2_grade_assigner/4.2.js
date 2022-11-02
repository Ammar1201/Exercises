const grade = (grd) => {
  if(grd <= 64)
    return 'F';
  else if(grd > 64 && grd <= 69)
    return 'D';
  else if(grd > 69 && grd <= 79)
    return 'C';
  else if(grd > 79 && grd <= 89)
    return 'B'
  else
    return 'A';
}