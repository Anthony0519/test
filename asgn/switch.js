const calculator = (male,female)=>{
    const man = Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman)/2

    const calculate = ()=>{
        switch(true){
            case(average >= 70):
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you are compatible`)
            break;
            case(average >= 60):
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you are slghtly compatible`)
            break;
            case(average >= 50):
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, Manageable`)
            break;
            case(average >= 40):
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you cannot marry`)
            break;
            default:
           console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, run for ur life's`)
            }
    }
    calculate()
}
calculator('davids', 'mary')