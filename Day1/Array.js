//push()-add element at the end of array
let number = [12, 14, 56, 38, 98];
console.log(number.push(67));//returns length
console.log(`push- ${number}`);

//pop()-removes element at the end of array
console.log(number.pop());
console.log(`pop- ${number}`);

//shift()-remove the first element
console.log(number.shift());
console.log(`shift- ${number}`);

//unshift()-add an element at the beginning
console.log(number.unshift(45));
console.log(`unshift- ${number}`);

//includes()-checks whether an element exists
console.log(number.includes(98));
console.log(`includes- ${number}`);

//indexOf()-to find the position of an element
console.log(number.indexOf(38));
console.log(`indexOf- ${number}`);

//join()- converts array into string
console.log(number.join());
console.log(`join- ${number}`);

//reverse()-to reverse the array
console.log(number.reverse());
console.log(`reverse- ${number}`);

// sort() to sort the array
console.log(number.sort());
console.log(`sort- ${number}`);