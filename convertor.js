module.exports = {
    getSingleMinuteRow(time) {
        if(time === "00:01:00") return "Y000";
        if(time === "00:02:00") return "YY00";
        if(time === "00:03:00") return "YYY0";

        return "0000";
    }
}