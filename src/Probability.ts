import {complex, derivative} from 'mathjs';

export let coin: {[key: string]: number} = {'head': 0.5, 'tail': 0.5};

export let die:{[key in 1|2|3|4|5|6]: number} = {1:(1/6), 2:(1/6), 3:(1/6), 4:(1/6), 5:(1/6), 6:(1/6)};

complex('1 - 4i');
derivative('x^2 + x', 'x');



function dotProduct(l1: [number], l2:[number])
{
    const zip = (arr1: [number], arr2:[number]) => arr1.map((k, i) => [k, arr2[i]])
    return zip(l1, l2).
            map(function(item: number[]){
                return item[0] + item[1]
            },[]).
            reduce(function(a: number,b:number){
                return a + b
            },0);
}