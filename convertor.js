module.exports = {
    getSingleMinuteRow(time) {
        const minutes = this.getMinutes(time);
        return this.getYellowLampsForMinutes(minutes) + this.getTurnedOffLights(minutes);
    },
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    },
    getYellowLampsForMinutes(minutes) {
        var yellowLamps = "";
        for (let i = 0; i < this.getNumberOfYellowMinutesLights(minutes); i++) {
            yellowLamps += "Y";          
        }

        return yellowLamps;
    },
    getTurnedOffLights(minutes) {
        var turnedOffLights = "";
        for (let i = 0; i < 4-this.getNumberOfYellowMinutesLights(minutes); i++) {
            turnedOffLights += "0";          
        }

        return turnedOffLights;
    },
    getNumberOfYellowMinutesLights(minutes) {
        return minutes%5;
    }
}