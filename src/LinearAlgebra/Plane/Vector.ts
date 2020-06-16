export namespace LinearAlgebra {
    export namespace Plane {
        export type PlaneVector = {x: number, y:number};
        export class Vector
        {
            readonly vector: PlaneVector;
            constructor(vector: PlaneVector)
            {
                this.vector = vector;
            }

            norm(): number
            {
                return Math.sqrt( Math.pow(this.vector.x, 2) + Math.pow(this.vector.y, 2));
            }

            unitVector(): Vector
            {
                let norm: number = this.norm();
                if (norm !== 0.0) {
                    return this.scalarMul(1/norm);    
                }
                return new Vector({x: 0, y: 0 });
            }

            proj(other: Vector):Vector
            {
                let u: Vector = other.unitVector();
                let v: number = this.dot(u);
                return u.scalarMul(v);
            }

            distanceTo(other: Vector): number
            {
                let p = other.findPerpendicularVector();
                let n = p.norm();
                if (n !== 0.00) {
                    return this.dot(p) / n ;
                }
                return 0;
            }

            findPerpendicularVector(): Vector
            {
                return new Vector({x: -1* this.getValue().y, y: this.getValue().x});
            }

            multiplication(other: Vector): Vector
            {
                let x1 = this.getValue().x * other.getValue().x;
                let y1 = this.getValue().y * other.getValue().y;
                return new Vector({x: x1, y: y1});
            }

            scalarMul(scalar: number): Vector
            {
                return new Vector({x: scalar * (this.vector.x), y: scalar * (this.vector.y)});      
            }

            add(other: Vector): Vector
            {
                let x1 = this.getValue().x + other.getValue().x;
                let y1 = this.getValue().y + other.getValue().y;
                return new Vector({x: x1, y: y1});    
            }

            dot(other: Vector): number
            {
                let x1 = this.getValue().x * other.getValue().x;
                let y1 = this.getValue().y * other.getValue().y;
                return x1 + y1;
            }

            getValue(): PlaneVector
            {
                return this.vector;
            }
        }
    }
}