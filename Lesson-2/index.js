// // 1
// let name = prompt("Your Name", "Eugene");
// let age = prompt("Age", "28");
// let city = prompt("City", "Minsk");
// let phone = prompt("Phone", "+375445554444");
// let email = prompt("Email", "eugene.br@gmail.com");
// let company = prompt("Company", "Gusarov-group");
// document.write(
//   "My Name is ",
//   name,
//   ". I am ",
//   age,
//   " years old. I live in ",
//   city,
//   " and work in ",
//   company,
//   ". My contacts: ",
//   phone,
//   ",",
//   email
// );

// // 2
// let year = 2022 - age;
// document.write("<br />" + name, " родился в ", year, " году.");

//3
let str = "111111";

if (str[0] + str[1] + str[2] == str[3] + str[4] + str[5]) {
  console.log("Верно");
} else console.log("Неверно");

//4
let a1 = -3;
if (a1 > 0) {
  console.log("Верно");
} else console.log("Неверно");

//5
let a = 10;
let b = 2;
console.log(a + b, a - b, a * b, a / b);
if (a + b > 0) {
  console.log((a + b) ** 2);
}

//6
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  console.log("Верно");
} else console.log("Неверно");

//7
let n = 60;
if (n > 0 && n <= 15) {
  console.log("1 четверть");
}
if ((n) => 16 && n <= 30) {
  console.log("2 четверть");
}
if ((n) => 31 && n <= 45) {
  console.log("3 четверть");
}
if ((n) => 46 && n < 60) {
  console.log("4 четверть");
}

//8
let day = 25;
if (day >= 0 && day < 11) {
  console.log("1 декада");
}
if (day >= 11 && day <= 20) {
  console.log("2 декада");
}
if (day >= 21 && day <= 30) {
  console.log("3 декада");
}

//9
let days = 5;
if (days < 365) {
  console.log("Меньше года");
} else {
  let years = days / 365;
  console.log(years, "года");
}

if (days < 31) {
  console.log("Меньше месяца");
} else {
  let month = days / 31;
  console.log(month, "месяца");
}

if (days < 7) {
  console.log("Меньше недели");
} else {
  let hours = days / 7;
  console.log(hours, "недели");
}
let hours = days * 24;
console.log(hours, "часа");
let minutes = days * 1440;
console.log(minutes, "минуты");
let seconds = days * 86400;
console.log(seconds, "секунды");

//10
day = 154;
let month;
if (day >= 0 && day <= 31) {
  console.log("Январь 1");
  month = 1;
} else if (day >= 32 && day <= 60) {
  console.log("Февраль 2");
  month = 2;
} else if (day >= 61 && day <= 91) {
  console.log("Март 3");
  month = 3;
} else if (day >= 92 && day <= 121) {
  console.log("Апрель 4");
  month = 4;
} else if (day >= 121 && day <= 152) {
  console.log("Май 5");
  month = 5;
} else if (day >= 152 && day <= 182) {
  console.log("Июнь 6");
  month = 6;
} else if (day >= 182 && day <= 213) {
  console.log("Июль 7");
  month = 7;
} else if (day >= 213 && day <= 243) {
  console.log("Август 8");
  month = 8;
} else if (day >= 243 && day <= 274) {
  console.log("Сентябрь 9");
  month = 9;
} else if (day >= 274 && day <= 304) {
  console.log("Октябрь 10");
  month = 10;
} else if (day >= 304 && day <= 335) {
  console.log("Ноябрь 11");
  month = 11;
} else if (day >= 335 && day <= 365) {
  console.log("Декабрь 12");
  month = 12;
}
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
}
