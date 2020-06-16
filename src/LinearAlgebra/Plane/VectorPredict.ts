//import { LinearAlgebra.Plane.Vector as V } from "./Vector";
import { LinearAlgebra as L } from "./Vector";

export namespace LinearAlgebra {
    export namespace Plane {
        
        export class VectorPredict
        {
            readonly vector: L.Plane.Vector
            constructor(vector: L.Plane.Vector)
            {
                this.vector = vector;
            }
            
            zeroVector(): boolean
            {
                if (
                    this.vector.getValue().x === 0.0 &&
                    this.vector.getValue().y === 0.0) {
                        return true;
                }
                return false;
            }

            perpendicular(other: L.Plane.Vector): boolean
            {
                let v = this.vector.dot(other);
                if (v === 0.0) {
                    return true;
                }
                return false;
            }

            linearlyDependent(other: L.Plane.Vector): boolean
            {
                let o = new VectorPredict(other);
                if (this.zeroVector() === true || o.zeroVector() === true) {
                    return true;
                }
                //B = tA
                let dot = this.vector.dot(other);
                let n1 = this.vector.norm();
                let n2 = other.norm();
                //linear depend mean, cos is 1,
                //which mean angle between 2 vectors is zero or 180
                let cos = dot/(n1 * n2);
                if ( Math.abs(cos - 0.0001) <= 1.0) {
                    return true;
                }
                return false;
            }
        }
    }
}