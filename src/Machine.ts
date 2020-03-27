import {IExpr, Environment} from "./TSNumber";

export class Machine
{
    private expr: IExpr;
    private env: Environment;

    constructor(expression: IExpr, env: Environment) {
        this.expr = expression;
        this.env = env;
    }

    private step(): IExpr
    {
        if (this.expr.reducible()) {
            this.expr = this.expr.reduce(this.env);
        }
        return this.expr;
    }

    public eval(): IExpr
    {
        while(this.expr.reducible()) {
            this.step();
        }
        return this.expr;
    }
}
