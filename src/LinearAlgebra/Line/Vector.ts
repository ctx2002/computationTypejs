export namespace LinearAlgebra
{
    export namespace Line {
        export class Vector
        {
            private readonly point: number;
            constructor(point: number)
            {
                this.point = point;
            }

            getValue(): number
            {
                return this.point;
            }

            length(): number
            {
                return Math.abs(this.getValue());
            }

            add(vector: Vector): Vector
            {
                let sum = this.getValue() + vector.getValue();
                return new Vector(sum);
            }

            scalarMultiplication(point: number): Vector
            {
                let m = point * this.getValue();
                return new Vector(m);
            }
        }
    }
}