module.exports = function getZerosCount(number) {
    var result= 0;
    while (number > 0){
        number /= 5;
        result += Math.floor(number);
    }
    return result;
}