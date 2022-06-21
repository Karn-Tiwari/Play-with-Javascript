//if(true){
//   console.log("true");
//  console.log("hello again");
//}

//}
// {} -> block
// isme ek block k ander ek se jyada baar declare nhi kar sakte hai nhi to error dega aur jis block me hai usme hi sirf uski value sabke liye rahega block se bahar atee hai iski value nhi reh jayeg phir bahar block me jo value hogi uski value ayegi agar hai to nhi to undefined hogi
// let fruits = "apple";
// console.log(fruits);
// {
//     let fruits;
//     console.log(fruits);
//     fruits = "mango";
//     console.log(fruits);
// }
// console.log(fruits);

//SHADOWING->
//agar bahar let ya const ho aur ander var ho to iss case me ILLEGAL SHADOWING hoti hai baki sare case me LEGAL SHADOWING hoti hai 

// let/const fruits = "apple";
// console.log(fruits);
// {
//     var fruits;
//     console.log(fruits);
//     fruits = "mango";
//     console.log(fruits);
// }
// console.log(fruits);