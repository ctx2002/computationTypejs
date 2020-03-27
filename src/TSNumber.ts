export type Primitive = number | boolean | string | null | undefined;
export interface IHash {
    [name: string] : IExpr;
}
export type Environment = IHash;

export interface IReduce {
    reduce(): IReduce | TSNumber ;
}

export interface IExpr {
    reduce(env: Environment): IExpr;
    reducible() : boolean;
    getValue(): Primitive;
}

export interface TSNumber
{
    value: number;
}

export class CVariable implements IExpr
{

    private readonly name: string;
    private value: IExpr;

    constructor(name: string) {
        this.name = name;
    }

    getValue(): Primitive {
        return this.value.getValue();
    }

    reduce(env: Environment): IExpr {
        this.value = env[this.name];
        /*//must reduce to smaller entity
        if (!(this.value instanceof CNumber) &&
            !(this.value instanceof CString) &&
            !(this.value instanceof CBool) &&
            (this.value !== null) &&
            (this.value !== undefined)) {
                throw new Error("CVariable must be in (CNumber, CString, CBool, null, undefined)");
        }*/
        return this.value;
        //return this.value;
    }

    reducible(): boolean {
        return true;
    }

    getName(): string
    {
        return this.name;
    }
}

export class CNumber implements IExpr
{
    private readonly n: number;

    constructor(n: number)
    {
        this.n = n;
    }

    getValue(): Primitive {
        return this.n;
    }

    reduce(): IExpr {
        return this;
    }

    reducible(): boolean {
        return false;
    }
}

export class CBool implements IExpr
{
    private readonly n: boolean;

    constructor(n: boolean)
    {
        this.n = n;
    }

    getValue(): Primitive {
        return this.n;
    }

    reduce(): IExpr {
        return this;
    }

    reducible(): boolean {
        return false;
    }
}
export class NoGoodBinanryExpr implements IExpr
{

    private readonly left: IExpr;
    private readonly right: IExpr;
    constructor(left: any, right: any) {
        this.left =  left;
        this.right = right;
    }

    getValue(): any {
        return this;
    }

    reduce(env: Environment): IExpr {
        return this;
    }

    reducible(): boolean {
        return false;
    }

}

export class CString implements IExpr
{
    private readonly n: string;

    constructor(n: string)
    {
        this.n = n;
    }

    getValue(): Primitive {
        return this.n;
    }

    reduce(): IExpr {
        return this;
    }

    reducible(): boolean {
        return false;
    }
}

export class DoNothing implements IExpr
{
    getValue(): Primitive {
        return undefined;
    }

    reduce(env: Environment): IExpr {
        return this;
    }

    reducible(): boolean {
        return false;
    }
}