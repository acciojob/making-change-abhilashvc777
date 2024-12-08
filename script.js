const makeChange = (c) => {
  // your name here
	 let obj = {}
       let num = c
       let Penny= 1
       let Nickel= 5
       let Dime= 10 
       let Quarter= 25
       let X = num%Quarter
       let x = Math.floor(num/Quarter)
    //    console.log(x,X)
       num=X
    //    console.log(num)
       let Y = num%Dime
       let y = Math.floor(num/Dime)
    //    console.log(y,Y)
       num=Y
    //    console.log(num)
       let Z = num%Nickel
       let z = Math.floor(num/Nickel)
    //    console.log(z,Z)
       num=Z
    //    console.log(num)
       let A = num%Penny
       let a = num/Penny
    //    console.log(a,A)
       obj.q = x
       obj.d = y
       obj.n = z
       obj.p = a
       return obj
};

// Do not the change the code below
const c = prompt("Enter c: "); 
alert(JSON.stringify(makeChange(c)));
