const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// A first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

console.log(uncookedFood);

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    currentObject.cooked = true; // Modifies the food so that it is cooked
    cookedFood.push(currentObject); // Puts the cooked food into the appropriate array
};

// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

for (let i = 0; i < uncookedFood.length; i++) {
    grill(uncookedFood[i]);
}

console.log(cookedFood);


/************ Alternative Below ************/

const grill2 = (uncookedFoodArray) => {
	for (let i = 0; i < uncookedFoodArray.length; i ++) {
		let currentItem = uncookedFood[i];
		currentItem.cooked = true;
		cookedFood.push(currentItem);
	}
}

console.log(cookedFood);

