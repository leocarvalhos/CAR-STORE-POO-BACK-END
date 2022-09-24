import Car from "./car";
import Client from "./client";
import Employee from "./employee";
import Shop from "./shop";

let car = new Car("Porsche Payenne", "Black", 2018, 25000)

let client = new Client("Stefan", 12000)

let employee = new Employee("Matt")

let shop = new Shop(car, client, employee)

shop.detailShop()