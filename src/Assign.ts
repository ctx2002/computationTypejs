import {IExpr, CVariable, Environment} from "./TSNumber";

export class Assign implements IExpr
{
    private readonly left : CVariable;
	private readonly right: IExpr;
	
	constructor(left: CVariable, right: IExpr)
    {
        this.left = left;
        this.right = right;
    }
	
	getValue(): any {
        return this.left;
    }

    reduce(env: Environment): IExpr {

        if (this.right.reducible()) {
            return new Assign(this.left, this.right.reduce(env));
        }
		env[this.left.getName()] = this.right;
        return new CVariable(this.left.getName());
    }

    reducible(): boolean {
        return true;
    }
}