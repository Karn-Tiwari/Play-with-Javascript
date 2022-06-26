let fs = require("fs");
//async code

console.log("Before");
// Fs.readFile("f1.txt",function(err,data){
//     console.log(data);

// });
let promise = fs.promise.readFile("f1.txt");
// console.log("promises");
// fullfilled
promise.then(function (data){
    console.log("" + data);
})
// rejected
promise.catch(function (err){
    console.log(err);
})
console.log("after")