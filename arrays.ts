const numbers = [1, 2, 3, 4];

let i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);

for (let num of numbers) {
  console.log(num);
}
