export function isOdd(n: number){
    const result = n % 2;
    if (result === 1) {
        //  nは奇数
        return true;
    }else if(result === -1){
        //　n は奇数
        return true;
    }else {
        // n は偶数
        return false;
    };
}