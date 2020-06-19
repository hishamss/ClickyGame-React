var test = [1, 2, 3, 4];

for (let i = test.length - 1; i > 0; i--) {
  console.log(`current index ${i}`);
  const j = Math.floor(Math.random() * i);
  console.log(`random index ${j}`);
  const temp = test[i];
  test[i] = test[j];
  test[j] = temp;
}

console.log(test);
