let Bus = {
    passengers: 0,
    seats: 20,
    // hopOnTheBus(){
    hopOnTheBus: function() {
        // SOCIAL_DISTANCING_THRESHOLD: state 
        const SOCIAL_DISTANCING_THRESHOLD = 0.5;
        if(this.passengers < this.seats * SOCIAL_DISTANCING_THRESHOLD) {
            console.log("get on!");
            this.passengers = this.passengers + 1;
        } else {
            console.log("sorry we don't have any seats.");
        }
    }
}

for(let i = 0; i < 11; i++) {
    Bus.hopOnTheBus();
}
