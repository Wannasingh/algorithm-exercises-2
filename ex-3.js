function validatePIN(pin) {
  //Start coding here
  const regex = /^([0-9]{4}|[0-9]{6})$/;
  return regex.test(pin);
}
// ^ ผมสนใจตัวนี้มากครับเปิดโลกมาก ^_^ เคยพิมพ์แต่แบบนี้ เดียวผมไปศึกษาเพิ่มเติมครับ
let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false

let result4 = validatePIN("123456");
console.log(result4); //true
