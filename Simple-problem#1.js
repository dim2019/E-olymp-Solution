var SpaceNumber

function input(number) {
    if (number >= 10 && number < 100) {
        let numberStr = number.toString();
        SpaceNumber = numberStr[0] + ' ' + numberStr[1]
    }
}
input(63);
console.log(SpaceNumber);