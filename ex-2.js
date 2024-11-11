function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }
  let positiveCount = 0;
  let negativeSum = 0;

  for (let num of input) {
    if (num > 0) {
      positiveCount++;
    } else {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}
//ยากมากครับตอนแรกได้ผลลัพทืมาเป็น 0 ใน อะเรย์ ไม่เข้าใจการรีเทิร์นผลลัพท์ให้ออกมาเป็นอะเรย์เปล่าครับ เดียวไปฝึกเพิ่มครับ

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
