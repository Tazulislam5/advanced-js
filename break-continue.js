const numbers = [1, -2, 3, 4, -5, 6, 7, -8, 9];

// for(i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     if(element > 4){
//         break;
//     }
//     console.log(element);

for(i = 0; i< numbers.length; i++){
    const element = numbers[i];
    if(element < 0){
        continue;
    }
    console.log(element);
}
