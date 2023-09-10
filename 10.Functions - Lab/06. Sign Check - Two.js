function signCheck(one, two, three) {

    if (one >= 0 && two >= 0 && three >= 0) {
        console.log("Postive") //+++
    } else if (one < 0 && two < 0 && three < 0) {
        console.log("Negative") //---
    } else if (one > 0 && two < 0 && three < 0) {
        console.log("Positive")  //+--
    } else if (one = 0 && two < 0 && three < 0) {
        console.log("Positive") 
    } else if (one < 0 && two > 0 && three > 0) {
        console.log("Negative")
    } else if (one > 0 && two > 0 && three < 0) {
        console.log("Negative")
    } else if (one < 0 && two < 0 && three > 0) {
        console.log("Positive")
    }

}


signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)