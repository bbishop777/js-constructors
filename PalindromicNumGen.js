var arryMem = [];

function reverseNum (num) {
  stringIt = num.toString();
  arryMem.push(num);
  return stringIt;//.split("").reverse().join("");
}
console.log(reverseNum(123));