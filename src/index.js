module.exports = function reverse (n) {
    n = Math.abs(n);
    let reverseN = 0;
    while (n > 0){
        reverseN = reverseN * 10 + (n % 10);
        n = Math.trunc(n / 10);
    }
    return reverseN;
}
