function calculateCircleArea(radius){
  if (radius > 0) {
    let area = 0;
    area = Math.PI * radius * radius;
    return area;
  }
}

function calculateRectangleArea(length, height){
  if (length > 0 && height > 0) {
    let area = 0;
    area = length * height;
    return area;
  }
}

function calculateTriangleArea(base, height){
  if (base > 0 && height > 0) {
    let area = 0;
    area = base * height * (1 / 2);
    return area;
  }
}




console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined