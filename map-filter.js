const numbers = [2, 3, 4, 5, 6, 7, 8];
const output = [];

for(i=0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

const square = numbers.map(function(x){
    return x * x;
})

const result = numbers.map(x => x * x);

const result = numbers.filter(x => x > 5);
const result = numbers.find(x => x > 5);
console.log(result);