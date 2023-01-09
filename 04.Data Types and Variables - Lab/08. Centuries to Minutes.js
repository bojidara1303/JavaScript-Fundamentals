function centuriesToMins(centuryCount) {

    let years = centuryCount * 100;
    let days = Math.trunc(years * 365.2422)  //a year has 365.2422 days on average 
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuryCount} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
centuriesToMins(1)
centuriesToMins(5)