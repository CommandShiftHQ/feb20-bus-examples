// "constructor" 
// Bus Class: This is the blueprint for a Bus
function Bus(maxSeats) {
    this.passengers = 0;
    this.seats = maxSeats;
}

Bus.prototype.hopOnTheBus = function() {
    const SOCIAL_DISTANCING_THRESHOLD = 0.5;
    if(this.passengers < this.seats * SOCIAL_DISTANCING_THRESHOLD) {
        console.log("get on!");
        this.passengers = this.passengers + 1;
    } else {
        console.log("sorry we don't have any seats.");
    }
}

Bus.prototype.displayPassengerCount = function() {
    console.log(`We have ${this.passengers} passengers on board`);
}


const magicBusfallowfieldToCityCentre = new Bus(20);
magicBusfallowfieldToCityCentre.hopOnTheBus();
magicBusfallowfieldToCityCentre.hopOnTheBus();
magicBusfallowfieldToCityCentre.hopOnTheBus();
magicBusfallowfieldToCityCentre.displayPassengerCount();

const oldhamtoCityCentre = new Bus(50);
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.hopOnTheBus();
oldhamtoCityCentre.displayPassengerCount();