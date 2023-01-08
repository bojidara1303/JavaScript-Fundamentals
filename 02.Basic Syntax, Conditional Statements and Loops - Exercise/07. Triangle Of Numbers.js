function triangleOfNums(n) {

    for (i = 1; i <= n; i++) {

        let result = '';

        for(let m = 1; m <= i; m++) {
            result += `${i} `;
        }
        console.log(result);
    }

}
triangleOfNums(3)