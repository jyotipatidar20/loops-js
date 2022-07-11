// let n=require("readline-sync");
// let choose_ascii=(n.question("enter number: "));
// // var ascii_char=97+ascii_char
// // for (var i=97;i<=ascii_char;i++) {
// //        console.log(i,end="");
// // }

// var ascii_char=97+choose_ascii
// for (var i=97;i<=ascii_char;i++) {
//        console.log((i),end="");
//     // ascii_char++
// }

ascii_char=67
for (var i=65; i<=ascii_char;i++){
    console.log(String.fromCharCode(i),end="")
}