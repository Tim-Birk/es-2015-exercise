import { choice, remove } from './helpers';
import fruits from './foods';

// Randomly draw fruit from array
const randomFruit = choice(fruits);

// Log message 1
console.log(`I'd like one ${randomFruit}, please.`);

// Log message 2
console.log(`Here you go: ${randomFruit}`);

// Log message 3
console.log(`Delicious! May I have another?`);

// Remove the fruit from the array of fruits
const newFruits = remove(fruits, randomFruit);

// Log message 4
console.log(`I’m sorry, we’re all out. We have ${newFruits.length} left.`);
