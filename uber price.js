class UberPriceCalculator {
    constructor(baseFare, distance, time) {
        this.baseFare = baseFare;
        this.distance = distance;
        this.time = time;
    }

    calculateFare() {
        
        const distanceFare = this.distance * 8.5; 
        const timeFare = this.time * 20;
        return this.baseFare + distanceFare + timeFare;
    }
}

const ride1 = new UberPriceCalculator(2.0, 8.0, 12.0);
const fare = ride1.calculateFare();

console.log(`Uber Fare: ${fare.toFixed(2)}`);
