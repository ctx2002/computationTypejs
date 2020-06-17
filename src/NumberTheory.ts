
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
    let end : number = a;

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

export function findInitailValueOfDiophantine(ax: number, by:number, result: number): Array<number>
{
    let f = gcd(ax, by);
    let m = quotientRemainder(result, f);
    if (m.r !== 0) {
        throw new Error('No solution');    
    }

    let r0 = ax;
    let r1 = by;

    let s0 = 1;
    let s1 = 0;

    let t0 = 0;
    let t1 = 1;

    /*if (ax < by) {
        r0 = by;
        r1= ax;
    }*/

    //ri+1 = ri-1 - ri*qi
    //si+1 = si-1 - si*qi
    //ti+1 = ti-1 - ti*qi
    while(true) {
        let next =  quotientRemainder(r0, r1);
        //console.log(next);
        if (next.r === 0) {
            break;    
        }
        //let r2 = m.r;
        //let q = m.r;
        
        r0 = r1;
        r1 = next.r;

        let cs = s0 - next.q*s1;
        let ct = t0 - next.q*t1;
        s0 = s1;
        s1 = cs;

        t0 = t1;
        t1 = ct;
        //console.log(s1, cs, t1, ct);
    }

    return [s1*m.q, t1*m.q];
}