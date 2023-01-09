function reverse(str) {

    let arr = Array.from(str)
    let reversed = arr.reverse().join("")
    let res = reversed.toString();
    console.log(res)
}
reverse("Hello")
reverse("SoftUni")
reverse("1234")