i=0
// k=1
while i<5:
    j=1
    while j<=5-i:
        print(" ",end="")
        j=j+1
    a=1
    while a<=k:
        print("*",end=" ")
        a=a+1
    k=k+1
    print()
    i=i+1
i=0
k=6
while i<=5:
    j=1
    while j<=i:
        print("",end=" ")
        j=j+1
    a=1
    while a<=k:
        print("*",end=" ")
        a=a+1
    k=k-1
    print()
    i=i+1