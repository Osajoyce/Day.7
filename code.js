//LEVEL 1
function fulllName() {
  let firstName = "Joyce";
  let lastName = "Aigbehi";
  let fulllName = firstName + " " + lastName;
  return fulllName;
}
console.log(fulllName());
//no 2
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
console.log(fullName("Joyce", "Aigbehi"));
//no 4
function area(length, width) {
  let area = length * width;
  return area;
}
console.log(area(10, 15));
//no 14
function checkSeason(month) {
  if ((month = "April" || "August" || "September")) {
    console.log("Winter");
  } else if ((month = "January" || "Febuary" || "March")) {
    console.log("Summer");
  } else if ((month = "May" || "December" || "July")) {
    console.log("Spring");
  } else {
    console.log("Autumn");
  }
  return checkSeason;
}
checkSeason("July");
//no15
function findMax(a, b, c) {
  let maxNum = -Infinity;
  for (let ii = 0; ii < arguments.length; ii++) {
    if (arguments[ii] > maxNum) {
      maxNum = arguments[ii];
      console.log(maxNum);
    }
  }
  return findMax;
}
findMax(0, -10, -2);
//level 2
function printArray() {
  for (const each of numbers) {
    console.log(each + " " + "is a number");
  }
  return printArray;
}
let numbers = [1, 4, 6, 8, 9, 8];
printArray(numbers);
//no4
function showDateTime() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes);
}
showDateTime();
//no 5
function swap(x, y) {
  let t = x;
  x = y;
  y = t;
  return [x, y];
}
console.log(swap(5, 7));

// LEVEL 3
// NO 20

function reverseCountries() {
  let countries = [
    `AbuDhabi`,
    `Ghana`,
    `Canada`,
    `Australia`,
    `London`,
    `Korea`,
  ];
  // let copyAr = []
  // copyAr.push(countries)
  let crv = countries.reverse();
  console.log(crv);
}
reverseCountries();
