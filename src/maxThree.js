export function maxThree(x,y,z){
    const a = x>=y;
    const b = x>=z;
    const c = y>=x;
    const d = y>=z;
    const e = z>=x;
    const f = z>=y;
    if(a&&b){
        return x;
    }else if(c&&d){
        return y;
    }else if(e&&f){
        return z;
    }
}