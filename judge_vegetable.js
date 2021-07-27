function judgeVegetable(vegetables, metric){
  if (metric === 'redness'){
    let max = 0;
    let winner = '';
    for (let properties in vegetables){
      if ((vegetables[properties].redness) > max){
        max = (vegetables[properties].redness);
        winner = vegetables[properties].submitter;
      }
    }
    return (winner);
  }
  else if (metric === 'plumpness'){
    let max = 0;
    let winner = '';
    for (let properties in vegetables){
      if ((vegetables[properties].plumpness) > max){
        max = (vegetables[properties].plumpness);
        winner = vegetables[properties].submitter;
      }
    }
    return (winner);
  }
  else{
    let max = 0;
    let winner = '';
    for (let properties in vegetables){
      if ((vegetables[properties].d) > max){
        max = (vegetables[properties].d);
        winner = vegetables[properties].submitter;
      }
    }
    return (winner);
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
judgeVegetable(vegetables, metric)

