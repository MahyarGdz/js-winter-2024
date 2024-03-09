// // || ==> or
// // && ==> and
// // !  ==> not

// var num1 = 25;
// var num2 = 10;
// var name1 = "ali";
// var und;

// // console.log(num1 > num2);

// var num3 = 0;
// var num4 = 5;

// console.log(num3 || num4);
// console.log(0 || false || "" || und || "alii"|| 0);
// // ==> or operator return first truthy value
// // ==> and if none etiher value was truthy then return last falsy value

// =================================================

// var num1 = 25;
// var num2 = 10;
// var num3 = 0;
// var num4 = 5;
// var name1 = "ali";
// var und;
// var bool = false;
// var str = "";

// // console.log(num1 && num3 && bool && num4);
// console.log("ali" && 25 && 10 && "aa" && true);
// //==> and operator ,return first falsy value
// //==> and if none of value was falsy then return last truthy value

//================================

//!

var bool = false;
var num1 = 255; //==> true
var name1 = "alli"; //==> true
var num = 0;

//num1 255 => true ==> !ture ==> false
//name1 "alli" => true ==> !ture ==> false
//num 0 => false ==> !false ==> true
// console.log(!num);

console.log(!15 || !"alii" || !0 || 75);
