function sumOddNums(n) {
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
            console.log(i)
            sum += i;
            counter++;
            if (counter === n) {
                break;
            }
        }
    }

    console.log(`Sum: ${sum}`)
}
sumOddNums(5)
sumOddNums(3)