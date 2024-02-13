function matrixAddition(a, b){ 
  let arr1 = []
  for(let i = 0; i < a.length; i++){
    let arr = []
      for(let j = 0; j < a.length; j++){
        arr.push(a[i][j] + b[i][j]);
      }
    arr1.push(arr);
    console.log(arr)
  }
  return arr1
}
