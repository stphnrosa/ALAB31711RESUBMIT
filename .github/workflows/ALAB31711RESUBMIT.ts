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

        } else if (this.make && this.model) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        } else {
            console.log("This NCycle was not created properly.");
        }
    }
}
//   Create a new method printAll, which returns nothing and has no parameters.

//     which returns nothing and has no parameters.
// Use type guards and appropriate techniques to implement printAll such that it logs the same statements as print, but for all matching pairs in the make and model arrays, if applicable.

// printAll(): void {
//     if(Array.isArray(this.make) && Array.isArray(this.model)) {
//         const minLength = Math.min(this.make.length, this.model.length);
//     for (let i = 0; i < i++) {
//         console.log(`This is a ${this.make[i]} ${this.model[i]} NCycle.`);
//     }
// } else if (this.make && this.model) {
//     console.log(`This is a ${this.make} ${this.model} NCycle.`);
// } else {
//     console.log("This NCycle was not created properly.");
// }
//     }
// }

