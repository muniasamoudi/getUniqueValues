const getUniqueValues = (Array) => {
    const uniqueArray = [];
  
    for (let i = 0; i < Array.length; i++) {
      let Unique = true;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (Array[i] === uniqueArray[j]) {
          Unique = false;
          break;
        }
      }
      if (Unique) {
        uniqueArray.push(Array[i]);
      }
    }
  
    return uniqueArray;
  };
  
  const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
  console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
  //O(n*n)