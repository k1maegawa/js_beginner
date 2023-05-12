export function fizzbuzz(n){
    const F = n % 3;
    const B = n % 5;
    const FB = n % 15;

    if(FB === 0){
        return 'fizzbuzz';
    }else if(B === 0){
        return 'buzz';
    }else if(F === 0){
        return 'fizz';
    }else{
        return n;
    }
}