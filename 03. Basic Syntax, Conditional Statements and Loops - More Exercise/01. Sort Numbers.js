function sortNumbers(a, b, c) {

    if (a >= b && a >= c && b >= c) {
        console.log(a)
        console.log(b)
        console.log(c)
    }else if(a >= b && a >= c && c >= b){
        console.log(a)
        console.log(c)
        console.log(b)
    } else if (a <= b && c <= b && a <= c) {
        console.log(b)
        console.log(c)
        console.log(a)
    }else if(a <= b && c <= b && c <= a){
        console.log(b)
        console.log(a)
        console.log(c)
    } else if (c >= b && c >= a && a >= b) {
        console.log(c)
        console.log(a)
        console.log(b)
    }else if (c >= b && c >= a && b >= a) {
        console.log(c)
        console.log(b)
        console.log(a)
    }


}
sortNumbers(2, 1, 3)
sortNumbers(-2, 1, 3)