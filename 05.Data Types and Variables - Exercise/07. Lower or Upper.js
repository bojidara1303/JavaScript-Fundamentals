function lowerOrUpper(char) {

    let charNum = char.charCodeAt();

    if (charNum >= 97 && charNum <= 122) {
        console.log('lower-case')
    } else if (charNum >= 65 && charNum <= 90) {
        console.log('upper-case')
    }
}
lowerOrUpper('L')
lowerOrUpper('f')