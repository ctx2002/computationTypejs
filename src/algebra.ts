function norm(vector: number[]): number
{
    let sum = vector.map( (x: number) => Math.pow(x, 2)).reduce((sum, current) => (sum + current), 0);
    return Math.sqrt(sum);
}

function uniqueUnitVector(vector: number[]): number[]
{
    let len = norm(vector);
    return vector.map((x:number) => (x/len));
}

/**** v and u must has same dimention */
function distance(v: number[], u: number[]): number
{
    const l = (arr1: number[], arr2:number[]) => arr1.map((k, i) => Math.pow(k - arr2[i], 2))
    let r = l(v, u).reduce((sum: number, x: number) => (sum + x), 0 )
    return Math.sqrt(r)
}

function dotProduct(v: number[], u: number[]): number
{
    const productList = (arr1: number[], arr2: number[]) => (arr1.map((item, index) => item*arr2[index]))
    return productList(v, u).reduce((sum, item) => (sum + item), 0)
}

function scalaMultiplication(v: number[], scalar: number): number[]
{
    return v.map((item) => (item * scalar));    
} 

export function arrayColumn(v: number[][], column: number): number[]
{
    return v.map((items) => items[column]);
}

function matrixProduct(km: number[][], mn: number[][]): number[][]
{
    let m: number = mn.length 
    if (m === 0) {
        return []
    }

    let n:number = mn[0].length;

    let result: number[][] = [];
    for (let i:number = 0; i < m ; i++) {
        let temp: number[] = [];
        for (let j: number = 0; j < n; j++) {
            temp[j] = dotProduct(km[i], arrayColumn(mn, j))
        }
        result[i] = temp;
    }

    return result;
}