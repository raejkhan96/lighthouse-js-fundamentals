const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// while loop
let i = 0;
while (i < ingredients.length){
	console.log(ingredients[i]);
	i++;
}

//for loop 
for (let i = 0; i < ingredients.length; i++){
	console.log(ingredients[i]);
}

// backwards 
for (let i = ingredients.length-1; i > -1; i--){
	console.log(ingredients[i]);
} 