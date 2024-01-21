let url = "https://example.com/";
let a = '<a target="_blank" href="https://example.com/">dfdfd</a>';
let a1 = '<a target="_self" href="https://example.com/">dfdfd</a>';
let a2 = '<a href="https://example1.com/">ghghgh</a>';
let reg = /https?:\/\/[^"]+/gi;
// console.log(reg.test(url));
// console.log(url.match(reg));
let targetReg = /target\s?=\s?"[^"]+"/gi;

let b = targetReg.test(a);
console.log(b);
if (b) {
  a = a.replace(targetReg, "");
}
console.log(a);
