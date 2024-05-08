let sum = 0;
for (let i = 0; i < 3; i++) {
  let number = +prompt(`Enter ${i + 1} number`, "1");
  while (isNaN(number)) {
    number = +prompt(`Please, enter ${i + 1} number correctly`, "1");
  }
  sum += number;
}
alert(`Average value of your entered numbers is ${sum / 3}`);