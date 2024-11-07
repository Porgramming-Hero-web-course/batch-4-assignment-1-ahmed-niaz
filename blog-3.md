
# *What are Type Guards?*
Type guards are TypeScript expressions that allow the type of a variable to be narrowed at runtime, even to perform certain operations safely up to the specified type. Basically, type guards help TypeScript determine the type of an object within a given scope, which can prevent runtime errors by ensuring that only valid operations are performed on the specified type.

*For example-*, imagine a function that calls `string | number` that accepts an argument of type number. If you want to apply specific operations to numbers or strings, you need to know the exact type within the function body. Type guards enable this flexibility, making your TypeScript code more precise and reducing the need for excessive type assertions.


# *Why Are Type Guards Necessary?*
*Enhanced Type Safety-* Type guards make sure that TypeScript is aware of the correct type at a given location in the code, preventing unwanted operations on variables.

*Readability and Maintainability-* They improve the readability of the code and lower the possibility of errors that may occur while working with different kinds.

*Type Narrowing-* Within a specified scope, They enable developers to work with particular kinds with confidence, avoiding needless casting or assumptions.

*Error Prevention-* Code stability and debugging can be greatly enhanced with type guards, which detect mistakes at compile time instead of runtime.


# *Types of Type Guards*
There are several ways to build type guards in TypeScript. Here, we'll discuss a few of the more popular ones:

1. **`typeof` Type Guard**

The `typeof` type guard is useful when working with primitive types like `string`, `number`, and `boolean`. 

```bash
  function getLength(value: string | number): number {
  if (typeof value === "string") {
    return value.length; 
  } else {
    return value.toString().length; 
  }
}
```

2. **`instanceof` Type Guard**

The `instanceof` type guard is used to check if an object is an instance of a particular class. 

```bash
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript knows it's a Dog
  } else {
    animal.meow(); // TypeScript knows it's a Cat
  }
}
```

3. **User-defined Type Guards**
User-defined Type Guards or Custom type guards are functions that explicitly return a type predicate.

```bash
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); 
  } else {
    pet.fly(); 
}
```

4. **`in` Operator Type Guards**
The `in` operator checks if a specific property exists in an object. 

```bash
interface Car {
  drive: () => void;
  wheels: number;
}

interface Boat {
  sail: () => void;
}

function operate(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive(); 
  } else {
    vehicle.sail(); 
  }
}
```

5. **Discriminated Unions**

Discriminated unions are a design pattern rather than a function or operator. 

```bash
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```