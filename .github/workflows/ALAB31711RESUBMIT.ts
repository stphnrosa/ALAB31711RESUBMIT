// @ts-check

class Vehicle {
    make: string;
    model: string;
    wheels: number;
    status: "stopped" | "started"; // "|" represents "or"

    constructor( // constructor lets us create an object with the class in multiple instances
        make: string,
        model: string,
        wheels: number,
    ) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.status = "stopped";
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 4); // changed four to 4
    }
}

class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 2); // super calls the constructor of the parent class
    }
}

function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    } else {
        console.log("The vehicle is stopped.");
    }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);


const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

//Part 3: Copy the existing Vehicle class definition as a starting point for NCycle.
//Modify NCycle to accept a generic type.
//Allow make and model to have either the generic type or an array of the generic type.Adjust the constructor parameters accordingly.


//reference: https://www.typescriptlang.org/docs/handbook/2/generics.html

//New class "NCycle"

class NCycle<T> {
    make: T | T[];
    model: T | T[];
    wheels: number;
    constructor(
        make: T | T[],
        model: T | T[],
        wheels: number,
    ) {

        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }

    //   Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0). Use type guards and other appropriate techniques to implement print such that it logs: "This is a <make> <model> NCycle." if make and model are not arrays."This NCycle was not created properly." if neither of the above are true.

    print(num: number = 0): void {
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            let numMake = this.make[num];
            let numModel = this.model[num];

            if (numMake !== undefined && numModel !== undefined) {
                console.log(`This is a ${numMake} ${numModel} NCycle.`);
            } else {
                console.log("This NCycle was not created properly.");
            }
        } else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        } else {
            console.log("This NCycle was not created properly.");
        }
    }
//   Create a new method printAll, which returns nothing and has no parameters.
// Use type guards and appropriate techniques to implement printAll such that it logs the same statements as print, but for all matching pairs in the make and model arrays, if applicable.

printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
        const minLength = Math.min(this.make.length, this.model.length); // use shorter length to avoid index issues
        for (let i = 0; i < minLength; i++) {
            console.log(`This is a ${this.make[i]} ${this.model[i]} NCycle.`);
        }
    } else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else {
        console.log("This NCycle was not created properly.");
    }
}
}
// Test your code in whatever ways you see fit. Below, we have included a block of rudimentary testing code that you can use, but you must compare this with your own expected output.
const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", 10, 4);
testCycle3.print(4);
testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number {
  return x + y;
}
add(testCycle1.make, testCycle5.model[1]);
// Error expected here
add(testCycle2.make, testCycle4.model[1]);
