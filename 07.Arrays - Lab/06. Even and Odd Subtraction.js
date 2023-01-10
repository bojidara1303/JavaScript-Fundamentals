function evenAndOddSubtraction(arr) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += Number(arr[i])
        } else {
            sumOdd += Number(arr[i])
        }
    }
    let res = sumEven - sumOdd;
    console.log(res)
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])