module.exports = {
    getSingleMinuteRow(time) {
        if(this.getMinutes(time) === 1) return "Y000";
        if(this.getMinutes(time) === 2) return "YY00";
        if(this.getMinutes(time) === 3) return "YYY0";

        return "0000";
    },
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }
}