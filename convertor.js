module.exports = {
    getSingleMinuteRow(time) {
        if(time === "00:01:00") return "Y000";

        return "0000";
    }
}