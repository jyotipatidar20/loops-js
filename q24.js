// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.question("enter number: ")
//    lis.append(num)
// }
// var maxi=lis[0];
// for (var j=0) {
//      if([maxi=lis[j]])
//    }
 

// console.log(maxi)


// let c=require("readline-sync");
// let loop_time=c.questionInt("enter loop time: ");
	 
// var maxi=0;
// let lis=[]
// for (let i=1;i<=loop_time;i++) {
//     let num=c.questionInt("enter number: ")
//     lis.push(num)
// console.log(lis)
// var maxi=lis[0];
// for(var j=0;j<loop_time.length;j++) {
// 	if (maxi<lis[j]) {
// 	    maxi=lis[i]
// 	}
//     console.log(maxi)
	 
// }
// console.log(maxi)
// }




a=require("readline-sync")
num=a.question("enter the number")
i=0
b=[]
while (i<num){
    num1=a.question("enter the number")
    b.push(num1)
    i++  
}
console.log(b)
i=0
max=0
while (i<b.length){
    if (max<b[i]){
        max=b[i]
    }
    i++
}
console.log(max)