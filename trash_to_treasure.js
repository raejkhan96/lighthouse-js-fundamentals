function smartGarbage(input, arr){
  for (type in arr){
    if (type === input){
      arr[type] += 1;
    }
  }
  return arr;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

