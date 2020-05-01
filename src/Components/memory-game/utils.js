

const IMAGES_DATA_SIZE = 90;

export const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}


export const generateRandomNumbers = (totalNumOfImages) =>{
  var randomNumbers = [];
  var newNumber = 0;
  while (totalNumOfImages > 0){
    newNumber = Math.floor(Math.random() * IMAGES_DATA_SIZE);
    if (!randomNumbers.includes(newNumber)){
      randomNumbers.push(newNumber);
      totalNumOfImages--;
    }
  }
  randomNumbers = [...randomNumbers,...randomNumbers];
  shuffle(randomNumbers);
  return randomNumbers;
}