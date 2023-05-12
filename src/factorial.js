export function factorial(n){
    //console.log(`call factorial: n is ${n}`)
    if (n === 0) { 
    return 1; 
    }
    //const ret = factorial(n-1);
    //console.log(n, ret)
    return n * factorial(n-1);
}     
//factorial(5);


//export function factorial(n) {
//    var j = 1;
//    for(var i = 1; i <= n; i++){
 //     j *= i;
//      console.log(i, j)
    //   console.log('j: '+ j)
 //   }
 //   return j;
    
 // }

//factorial(5)

//export function factorial(n){
//    var j = 1;
//    for(var i = 1; i <= n; i++){
//        j *= i;
//    }
//    return j;
//}
