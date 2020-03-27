import {Primitive,IExpr, CNumber, Environment} from "./TSNumber";

export class Add implements IExpr
{
    private readonly left:  IExpr;
    private readonly right: IExpr;
    private value: number;

    constructor(n: IExpr, n1: IExpr)
    {
        this.left = n;
        this.right = n1;
    }

    getValue(): Primitive {
        return this.value;
    }

    reduce(env: Environment): IExpr {
        if (this.left.reducible()) {
            return new Add(this.left.reduce(env), this.right);
        } else if (this.right.reducible()) {
            return new Add(this.left, this.right.reduce(env));
        }
        this.value = (this.left.getValue()) as number + (this.right.getValue() as number);
        return new CNumber(this.value);
    }

    reducible(): boolean {
        return true;
    }
}