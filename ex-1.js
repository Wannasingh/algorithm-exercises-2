function fizzBuzz(n) {
  //Start coding here
  let result = [];

  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
    }

    if (i % 5 === 0) {
      output += "Buzz";
    }

    if (output === "") {
      output = i.toString();
    }

    result.push(output);
  }

  return result;
}
//ยากมากครับยังไม่เข้าใจการเขียนโค้ดนี้เปิดมาตอนแรกจึ้งไปไม่เป็น แต่เดียวไปลองทำซ้ำๆหลายๆรอบครับ

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
