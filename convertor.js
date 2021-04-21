module.exports = {
    getSingleMinuteRow(time) {
        const minutes = this.getMinutes(time);
        if(minutes === 1) return this.getYellowLampsForMinutes(minutes) + "000";
        if(minutes === 2) return this.getYellowLampsForMinutes(minutes) + "00";
        if(minutes === 3) return this.getYellowLampsForMinutes(minutes) + "0";

        return "0000";
    },
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    },
    getYellowLampsForMinutes(minutes) {
        var yellowLamps = "";
        for (let i = 0; i < minutes; i++) {
            yellowLamps += "Y";          
        }

        return yellowLamps;
    },
    getTurnedOffLights(minutes) {
        var turnedOffLights = "";
        for (let i = 0; i < 4-minutes; i++) {
            turnedOffLights += "Y";          
        }

        return turnedOffLights;
    }
}