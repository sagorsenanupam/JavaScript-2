// for (let i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "Event Number");
//   } else {
//     console.log(i, "Odd Number");
//   }
// }

let sum = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 3 == 0) {
    sum += i;
    i++;
  }
}
console.log(sum);
