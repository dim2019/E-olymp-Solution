var array = []

function space($num1, $num2) {
    let i = 0;
    while (i < $num2) {
        if ($num1 > 10 && $num1 < 99 && $num2 > 10 && $num2 < 99) {
            $num1++
            if ($num1 == $num2) {
                break
            }
            array.push($num1)
        }
        i++
    }
}
space(20, 50)
console.log(array);