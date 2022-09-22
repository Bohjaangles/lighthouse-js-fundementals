function range (start, end, step){
  let someArray = [];
  for (let i = start; i <= end; i += step){
    if (start === null || end === null || step === null || start > end || step < 0){
      return someArray;
    }
    someArray.push(i);
  }
  return someArray;
}