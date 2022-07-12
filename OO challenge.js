// Part One
// Create a class for vehicle. Each vehicle instance should have the following properties:

// make
// model
// year
// Each vehicle instance should have access to a method called honk, which returns the string “Beep.

class Vehicle {
    constructor (make, model, year)
    this.make = make;
    this.model = model;
    this.year = year;
}

honk() {
    return "Beep";
}

// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

toString() {
 return `The Vehicle is a ${make}, ${model} from ${year}.`;
}

// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    numWheels {
        return 4;
    }
}

//solution\\
class Car extends Vehicle {
    constructor(make, model, year) { //why is the constructer here when we are already extending from Vehiicle?
        super(make, model, year); //still unclear about "super" purpose. 
        this.numWheels = 4;
    }
}

// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

// Part Four
// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(this.newVehicle.length >= this.capacity) {
            return "Sorry, we are full."
        }
        if(newVehicle !== Vehicle) { //was trying to state that if newVehicle doesnt fill requirements of Vehicle class.
            return "Only vehicles are allowed in here!"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

//solution\\
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this. capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) { //is "instanceOf" the same thing as "extends"? would like to go over this syntax
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we are full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}