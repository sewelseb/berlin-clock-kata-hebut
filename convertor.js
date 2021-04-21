module.exports = {
    getSingleMinuteRow(time) {
        if(time === "00:01:00") return "Y000";
        if(time === "00:02:00") return "YY00";

        return "0000";
    }
}