function reading(pagesCount, pagesPetHour, days) {
    let totalHours = pagesCount / pagesPetHour;
    let hoursPerDay = totalHours / days;
    console.log(hoursPerDay)
}
reading(212, 20, 2)
reading(432, 15, 4)