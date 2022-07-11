s=""
var a=65
for (i=0;i<=4;i++){
     for(j=0;j<=i;j++) {
         s=s+(String.fromCharCode(a))
         a++
     } 
    
    s=s+"\n"
}
console.log(s)