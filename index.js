console.log('hello world');

let backpack = [];

backpack.push('sword', 'potion');
backpack.push('food');
backpack.push('shield');

// console.log(backpack)

let onBelt = backpack.splice(0, 1);



let furCoat = 'fur coat';

backpack.push(furCoat);

backpack.pop();


let itemCount = backpack.length;

backpack.push("flint", "blanket", "knife", "toothbrush");

let backpack2 = backpack.splice(3,3);

// console.log(itemCount);
// console.log("Backpack2: ", backpack2);
// console.log("Belt: ", onBelt);

for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i])
}



for (let i = 0; i < backpack2.length; i++) {
    console.log(backpack2[i])
}