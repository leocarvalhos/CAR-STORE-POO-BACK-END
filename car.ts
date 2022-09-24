export default class Car{
 model: string;
 color: string;
 year: number;
 value: number;
  
    constructor(m: string, c: string, y: number, v: number) {
        this.model = m;
        this.color = c;
        this.year = y;
        this.value = v;
    }
    getModel() {
      return this.model
    }
    setModel(model: string) {
        this.model = model
    }
    getYear() {
        return this.year
    }
    setYear(year: number) {
        this.year = year
    }
    getValue(): number {
        console.log(this.value);
        
        return this.value
    }
    setValue(value: number) {
        this.value = value
    }
}



