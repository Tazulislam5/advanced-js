const students = [
    {id: 12, name: "omor"}, 
    {id: 13, name: "gomor"}, 
    {id: 14, name: "tolor"}, 
    {id: 15, name: "nishad"}, 
    {id: 16, name: "saifa"}

]
// const output = [];

// for(i=0; i < students.length; i++){
//     const element = students[i];
//     const elementName = element.name;
//     output.push(elementName);
    
// }
// console.log(output);
const result = students.map(s => s.name);
const sid = students.map(s => s.id);
const special = students.filter(s => s.id > 40);
console.log(result,sid, special);