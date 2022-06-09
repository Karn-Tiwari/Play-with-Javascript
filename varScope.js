// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
//     if(a==10){
//         var a;
//         console.log(a);
//     }
//     console.log(a);
// }  
// fn();
// VAR- Function scope hote hai ek baar function call ho gai to jo var ki value hai wahi rahegi poore function me chahe redeclare kare chahe jo kare jab tak reassing na kar di jaye


// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
//     if(a==10){
//         var a=20;
//         console.log(a);
//     }
//     console.log(a);
// }  
// fn();

//Function scope hota hai iseliye function k ander same hi value rehti hai agar koi aur value assing na ki gai ho to
var a = 10;
console.log("this line contains",a);
function fn(){
    console.log("this line contains",a);
    var a = 20;
    a++;
    console.log("this line contains",a);
    if(a){
        var a = 30;
        a++;
        console.log("this line contains",a);
    }
    console.log("this line contains",a);
}
fn();
console.log("this line contains",a);
