// function printMessage(msg:string):void{
//     console.log(`Message: ${msg}`)
// }
import {sum} from "./calc";

let printMessage = (msg:string): void => console.log(`Message: ${msg}`)

printMessage("Hello, Typescript");
// printMessage(100)
printMessage("It is sunny today");

let data = new Map();
data.set("Bob","London");
data.set("Alice","Paris");
data.forEach((val,key) => console.log(`${key} lives in ${val}`));

let total = sum(100,200,300);
console.log(`Total is ${total}`)