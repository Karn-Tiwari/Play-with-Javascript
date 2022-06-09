// console.log("line number 1",varName);//kuki abhi execution context me memory allocate hui hai jisme undefined hai
// var varName = 10;
// console.log("line number 3",varName);//Isme 10 print hoga
// function fn(){
//     console.log("line number 5",varName);//isme abhi function ka execution context me memory allocate hui hai jisme undefined hai
//     var varName = 20;
//     console.log("line number 7",varName);
// }
// fn();

// console.log("line number 101", varName);
// var varName = 10;
// console.log("line number 13", varName);
// function fn() {
//     console.log("line number 15", varName);
//     var varName = 20;
//     function b() {
//         console.log("line number 17", varName);// ye scope ki wajah se ye wale line ka varName variable 20 print karega
//     }
//     b();
// }
// fn();


// console.log("This line contains", varName);
// var varName = 10;
// //fn b defination
// function b() {// lexicorgraphical scope ki wajah se ye wale line ka varName variable 10 print karega kuki jaha pe function ki defination hoti hai waha k outside wo variable ko dhoondhega aga function k ander variable nhi hai to jaha se call hua hai wwaha nhi dekhega
//     console.log("This line contains", varName);
// }
// console.log("This line contains", varName);
// function fn() {
//     console.log("This line contains", varName);
//     var varName = 20;
//     //from fn
//     b();
// }
// fn();


// console.log("This line contains", varName);
// var varName = 10;
// //fn b defination
// function b(){
// console.log("This line contains", varName);
// }
// console.log("This line contains", varName);
// function fn() {
//     console.log("This line contains", varName);
//     var varName = 20;
//     //from fn
//     b();
//     console.log("This line contains", varName);
// }
// fn();