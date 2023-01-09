function echoType(input) {
    let type = typeof (input)

    console.log(type)
    if (type === "string") {
        console.log(input)
    } else if (type === "number") {
        console.log(input)
    } else {
        console.log("Parameter is not suitable for printing")
    }
}
echoType('Hello, JavaScript!')
echoType(18)
echoType(null)