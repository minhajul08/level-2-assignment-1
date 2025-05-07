// problem -1

function formatString(input : string , toUpper : boolean = true) :string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
//   console.log(formatString("Hello"));
//   console.log (formatString("Hello", true))
//   console.log (formatString('hello',false))

// Problem -2 

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return (items.filter(item => item.rating >= 4))
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 9.0 },
  ];
  
//   console.log(filterByRating(books));

// problem -3

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
//   console.log(concatenateArrays(["a", "b"], ["c"])); 
// console.log(concatenateArrays([1, 2], [3, 4], [5])); 

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
  
  
  