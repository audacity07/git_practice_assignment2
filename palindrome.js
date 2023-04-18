// Check whether a string is a Palindrome or not.

let str = "RACECAR";

let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
  bag = bag + str[i];
}
if (bag === str) {
  console.log("This String is a Palindrome");
} else {
  console.log("This String is not a Panlindrome");
}
