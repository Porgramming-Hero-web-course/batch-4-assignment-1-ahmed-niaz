class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}
// const car = new Car("Honda", "Civic", 2017);
// console.log(car.getCarAge());
