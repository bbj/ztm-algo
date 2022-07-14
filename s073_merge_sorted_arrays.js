const mergeSortedArrays = function(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i1 = 1, i2 = 1;

  //check input
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i1];
      i1++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[i2];
      i2++;
    }
  }
  
  return mergedArray;  
}
console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));