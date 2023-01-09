function biggestOfThreeNums(one, two, three) {

    if (one >= two && one >= three){
        console.log(one)
    } else if (two >= one && two >= three){
        console.log(two)
    }else if (three >= one && three >= two){
        console.log(three)
    }
}
biggestOfThreeNums(-2, 7, 3)