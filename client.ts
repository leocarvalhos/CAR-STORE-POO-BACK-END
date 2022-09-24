export default class Client{
    name: string;
    income: number;

    constructor(n: string, i:number) {
        this.name = n;
        this.income = i;
    }
    public getName() {
        return this.name 
    }
    public setName(name: string):string {
        return this.name = name;
    }
    public getIncome(){
        return this.income 
    }
    public setIncome(income: number):number {
       return this.income = income;
    }
}