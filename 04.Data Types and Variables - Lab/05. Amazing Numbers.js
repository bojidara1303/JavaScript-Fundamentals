function amazingNumbers(n) {

    let sum = 0;
    n = n.toString()

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i])
    }
    let result = sum.toString().includes("9")
    console.log(result ? `${n} Amazing? True` : `${n} Amazing? False`)

}
amazingNumbers(1233)
amazingNumbers(999)