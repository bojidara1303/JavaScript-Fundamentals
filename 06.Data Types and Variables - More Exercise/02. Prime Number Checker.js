function primeNumberChecker(n) {

    if (n / n === 1 && n / 1 === n && n % 2 === 0) {
        console.log(false)
    } else if (n / n === 1 && n / 1 === n) {
        console.log(true)
    }

}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)