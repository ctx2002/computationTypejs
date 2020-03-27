import {IExpr, CNumber, Environment} from "./TSNumber";

export class Multiply implements IExpr
{
    private readonly left : IExpr;
    private readonly right: IExpr;
    private finalResult: number;

    constructor(left: IExpr, right: IExpr)
    {
        this.left = left;
        this.right = right;
    }

    getValue(): any {
        return this.finalResult;
    }

    reduce(env: Environment): IExpr {

        if (this.left.reducible()) {
            return new Multiply(this.left.reduce(env), this.right);
        } else if (this.right.reducible()) {
            return new Multiply(this.left, this.right.reduce(env));
        }

        this.finalResult = (this.right.getValue()) as number * ((this.left.getValue()) as number);

        return new CNumber(this.finalResult);
    }

    reducible(): boolean {
        return true;
    }

}