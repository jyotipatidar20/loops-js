s=""
for( var i=1;i<=5;i++){
    for(var k=1;k<=5-i;k++){
        s=s+" "
    }
    for(var j=1;j<=i;j++){
        s=s+" "+i
    }
        s=s+("\n")
}
console.log(s)