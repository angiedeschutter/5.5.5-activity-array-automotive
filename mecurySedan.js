//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor (make, model, year, color, mileage){
    super(make, model, year, color, mileage)
    this.maxPassengers=5
    this.passengers=2
    this.numberOfWheels=4
    this.maxSpeed=100
    this.fuel=7
    this.scheduleService=false
    }

    loadPassenger(num){
        if(num>0){
            console.log("ready to go")
        } else{console.log("waiting for driver")}
    }

    start(){
        if(this.fuel>0){
            console.log("ready to start")
        } else {console.log("need to fill up fuel")}
    }

    scheduleService(){
        if(this.mileage<30000){
            console.log("Service Required")
        }
    }
}

let myCar = new Car('mercury', 'sedan', '1960',"red", "100000")
myCar.loadPassenger()
myCar.start()
myCar.scheduleService()