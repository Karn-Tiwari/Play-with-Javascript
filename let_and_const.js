// * Temporal Dead Zone
// * {Block} Scope
// *Variable {Shadowing}
// * var/let/const

 

// * Temporal Dead Zone->ye execution page k starting se leke first variable dedleration k beech ka area hai jise hum TDZ kahte hai ye koi error nhi hai balki safety measure hai 
//Cannot acces before initialization
// TDZ->let

//
console.log("Hello World");
console.log("This line contains", varName);
//declare
let varName;
//default ->undefined
console.log("This line contains", varName);
varName = 10;
varName = 20;
console.log("This line contains", varName);
//let varName;

// CONST-> reassin❌ redeclare
//bante wakt hi value put karni padti hai khali nhi chhor sakte hai 
//baki sare feature let ki tarah hi kaam karte hai 
