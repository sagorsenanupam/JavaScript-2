//Continue --> skin rest of the code of this iteration
//break --> i am done with this loop loop end
// for (i = 1; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

let n = 0;
while (n < 50) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }
  console.log(n);
}
