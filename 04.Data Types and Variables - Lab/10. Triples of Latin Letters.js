function triplesOfLatinLetters(num) {

    for (let i = 0; i < num; i++) {
        let firstLetter = String.fromCharCode(97 + i)
        for (let k = 0; k < num; k++) {
            let secLetter = String.fromCharCode(97 + k)
            for (let m = 0; m < num; m++) {
                let thirdLetter = String.fromCharCode(97 + m)
                console.log(`${firstLetter}${secLetter}${thirdLetter}`);
            }
        }
    }
}
triplesOfLatinLetters(3)