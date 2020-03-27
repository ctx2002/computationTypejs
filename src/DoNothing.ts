import {IExpr, Environment, CVariable, Primitive} from "./TSNumber";

export class DoNothing implements IExpr
{
	private readonly variable: CVariable;
	private env: Environment;

    constructor(variable: CVariable, env: Environment)
    {
        this.variable = variable;
    }
	
	public getValue(): Primitive {
        return (this.env[this.variable.getName()]).getValue();
    }

    public reduce(env: Environment): IExpr {
		return this;
    }

    public reducible(): boolean {
        return false;
    }
}