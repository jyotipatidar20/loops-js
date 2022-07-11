a=require("readline-sync")
var b=a.question("enter the name: ")
s=""
for(i=0;i<=b.length;i++){
    for(j=0;j<i;j++){
        s=s+b[j]
    }
        s=s+("\n")
}
console.log(s)



a=require("readline-sync")
var b=a.question("enter the name: ")
s=""
for (i of b){
    s=s+i
    console.log(s)
    
}

