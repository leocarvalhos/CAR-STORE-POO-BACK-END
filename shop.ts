import Car from "./car";
import Client from "./client";
import Employee from "./employee";

export default class Shop{
    car: Car;
    client: Client;
    employee: Employee;
    price: number;
    discount: number;
    constructor(car: Car, cli: Client, emp: Employee) {
        this.car = car;
        this.client = cli;
        this.employee = emp;
        this.car.setValue(this.giftDiscount(this.car.getValue()))
        this.price = this.car.getValue()
        this.employee.setCommission(this.addCommission(this.price))
        this.discount = 0;    
    }
   
    private giftDiscount(price: number):any { 
        if (this.car.getYear() < 2000) {
            this.discount = this.car.getValue() * 0.90
            this.car.setValue(this.discount) 
        } else {
            this.car.setValue(price)
        }
        if (this.client.getIncome() < 3000) {
            this.discount = this.car.getValue() * 0.90
          
         this.car.setValue(this.discount)
        } else { 
         this.car.setValue(this.car.getValue())
           
            
        }
    }
    public addCommission(value: number):number {
        

        return this.employee.setCommission(value * 0.02)

    }
    public detailShop() {
        console.log(`${this.client.getName()}\nCar:${this.car.getModel()}, Year:${this.car.getYear()}, Value:${this.car.getValue()}\nEmployee: ${this.employee.getName()}, Commission: $ ${this.employee.getCommission()}`);
        
    }

}
