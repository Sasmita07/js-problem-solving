const inputArgs = [2, 4, 6, 8, 9, 15];

const getLogBase2Values = (inputArr) => {
  if (inputArr?.length > 0) {
    const filteredItems = inputArr.filter((item) =>
      Number.isInteger(Math.log2(item))
    );
    return filteredItems.map((item) => Math.pow(item, 2));
  }
  return inputArr;
};

console.log(getLogBase2Values(inputArgs));
