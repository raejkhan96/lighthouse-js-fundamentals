const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let arr = [];
  for (let i = 0; i < moves.length; i++){
    if (moves[i] === 'north'){
      y = y + 1;
    }
    else if (moves[i] === 'south'){
      y = y - 1;
    }
    else if (moves[i] === 'east'){
      x = x + 1; 
    }
    else if (moves[i] === 'west') {
      x = x - 1;
    }
  }
  arr = arr.concat(x,y);
  return arr;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

finalPosition(moves);
