function range(start, end, step){
  let arr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return arr;
  }
  else{
    for (i = start; i <= end; i = i + step){
      arr = arr.concat(i);
    }
    return arr;
  }
}

// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
