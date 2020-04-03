export namespace LinearAlgebra {
    export namespace Plane {
        type PlaneVector = {x: number, y:number};
        export class Vector
        {
            readonly vector: PlaneVector;
            constructor(vector: PlaneVector)
            {
                this.vector = vector;
            }

            unitVector(): PlaneVector
            {
                let norm : number;
                norm = Math.sqrt( Math.pow(this.vector.x, 2) + Math.pow(this.vector.y, 2));
                if (norm !== 0.0) {
                    return this.scalarMul(1/norm);    
                }
                return {x: 0, y: 0 };
            }

            scalarMul(scalar: number): PlaneVector
            {
                return {x: scalar * (this.vector.x), y: scalar * (this.vector.y)};      
            }
        }
    }
}