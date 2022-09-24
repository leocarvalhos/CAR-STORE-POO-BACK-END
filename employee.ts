export default class Employee{
    name: string;
    commission?: number;

    constructor(n: string, com?:number) {
        this.name = n;
        this.commission = com;
    }
    public getName(){
        return this.name 
    }
    public setName(name: string):string {
        return this.name = name;
    }
    public getCommission() {
        return this.commission 
    }
    public setCommission(commission: number):number {
       return this.commission = commission;
    }
}