
export function gcd(a: number , b: number): number 
{
    let old = a;
    while (b !== 0) {
        a = b;
        b = old % b;
        old = a;
    }

    return a;
}

export function ex_gcd(a: number, b: number): Array<number>
{
    var x1, y1, r;
    if (b === 0) {
		return [1, 0, a];
	} else {
	    [x1, y1, r] = ex_gcd(b, a % b);
		let x0 = y1;
		let y0 = (x1 - (Math.floor(a / b) * y1));
        return [x0, y0, r];		
    }
}

export function quotientRemainder(dividend : number, divisor :number): {'q': number, 'r': number}
{
    let quotient = Math.floor(dividend/divisor);
    let remainder = dividend % divisor;

    return {'q' : quotient, 'r': remainder};
}

export function isPrime(a: number): boolean
{
    let c:number = Math.floor(Math.sqrt(a));
    let i : number;
    for(i= 2; i <= c; i++) {
        let r = quotientRemainder(a, i);
        if (r.r === 0) {
            return false;
        }  
    } 
    
    return true;
}

function nextPrimeFrom(start: number)
{
    while(true && start < 1000000) {
        if (isPrime(++start) === true) {
            return start;
        }
    }

    return 0;
}

export function factor(a: number): Array<number>
{
    let start : number = 2;
    let q = a;
    let result:Array<number> = [];
    let end : number = Math.floor(Math.sqrt(a));

    if (isPrime(a)) {
        return [a];
    }

    while (start <= end) {
        let r = quotientRemainder(q, start);
        if (r.r === 0) {
            result.push(start);
            q = r.q;
        } else {
            start = nextPrimeFrom(start);
            if (start === 0) {
                return [];
            }
        }
        
    }
    return result;
}