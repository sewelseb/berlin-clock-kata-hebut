module.exports = {
    getSingleMinuteRow(time) {
        const minutes = this.getMinutes(time);
        if(minutes === 1) return "Y000";
        if(minutes === 2) return "YY00";
        if(minutes === 3) return "YYY0";

        return "0000";
    },
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }
}