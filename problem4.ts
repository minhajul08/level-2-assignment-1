// problem-4


class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  // Example usage
  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());
  console.log(myCar.getModel());