// syntactic sugar
class Bus {
    // method vs function
    // all methods are functions
    constructor(maxSeats) {
        this.passengers = 0;
        this.seats = maxSeats;
    }

    hopOnTheBus() {
        const SOCIAL_DISTANCING_THRESHOLD = 0.5;
        if(this.passengers < this.seats * SOCIAL_DISTANCING_THRESHOLD) {
            console.log("get on!");
            // keeps track of number of passengers
            this.passengers = this.passengers + 1;
        } else {
            console.log("sorry we don't have any seats.");
        }
    }

    // referred as methods
    // they live within a class
    displayPassengerCount() {
        console.log(`We have ${this.passengers} passengers on board`);
    }
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

