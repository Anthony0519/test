const calculator = (male,female)=>{
    const man = Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman)/2

    const calculates = () => {
        if (average >=70) {
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you are compatible`)
        }
      else  if (average >=60) {
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you are slightly compatible`)
        }
       else if (average >=50) {
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, manageable`)
        }
       else if (average >=40) {
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, you cannot marry`)
        } else {
            console.log(`${male}'s scores is: ${man}%, and ${female}'s scores is: ${woman}%, and your average is: ${average}%, run for your life's`)
        }
    };
    calculates()
}
calculator('davids', 'mary')