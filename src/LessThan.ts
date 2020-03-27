import {CString,IExpr, CNumber, CBool, NoGoodBinanryExpr, Environment} from "./TSNumber";

export class LessThan implements IExpr
{
    private readonly left: IExpr;
    private readonly right: IExpr;
    private result: boolean;

    constructor(left : IExpr, right: IExpr)
    {
        this.left =  left;
        this.right = right;
    }

    getValue(): boolean {
        return this.result;
    }

    reduce(env: Environment): IExpr {

        if (this.left.reducible()) {
            return new LessThan(this.left.reduce(env), this.right);
        } else if (this.right.reducible()) {
            return new LessThan(this.left, this.right.reduce(env));
        }

        if (this.left instanceof CNumber && this.right instanceof CNumber) {
            this.result = ((this.left.getValue()) as number) < (this.right.getValue() as number);
            return new CBool(this.result);
        } else if (this.left instanceof CString && this.right instanceof CString) {
            this.result  = (this.left.getValue() as string).localeCompare(this.right.getValue() as string) === -1;
            return new CBool(this.result);
        }

        return new NoGoodBinanryExpr(this.left, this.right);
    }

    reducible(): boolean {
        return true;
    }

}