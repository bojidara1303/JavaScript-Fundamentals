function reverse(num, arr) {
    let result = ""

    for (let i = num - 1; i >= 0; i--) {
        result += `${arr[i]} `
    }

    console.log(result)
}
reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])