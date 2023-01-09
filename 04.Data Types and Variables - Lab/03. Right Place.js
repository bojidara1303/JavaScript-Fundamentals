function rightPlace(inititalStr, char, result) {

    let res = inititalStr.replace("_", char);
    let final = res === result ? "Matched" : "Not Matched";
    console.log(final)
}
rightPlace('Str_ng', 'I', 'Strong')