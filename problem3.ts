// problem -3

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  //   console.log(concatenateArrays(["a", "b"], ["c"])); 
  // console.log(concatenateArrays([1, 2], [3, 4], [5])); 
  