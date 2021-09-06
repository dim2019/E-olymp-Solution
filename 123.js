var solutios

function reverse(number) {
    if (number == null) {
        console.log('Enter any number to reverse the value');
    } else {
        let str = number.toString()
        solutios = str.split('').reverse().join('')
    }
}
reverse(2342)
console.log(solutios);