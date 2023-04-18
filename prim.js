let num = 14;
let count = 0;

for (i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log("This is a prim number");
} else {
  console.log("This is not a prim number");
}
