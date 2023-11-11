const doSomething = new Promise((resolve)=> {
    const man = Math.floor(Math.random()*100)
    resolve(man)
});

const anotherThing = (a)=> {
    const man = a
    const woman = Math.floor(Math.random()*100)
    const average = (man + woman)/2
    const result = {man: a, woman: woman, average:average}
    return result
}

const lastThing = (a)=>{
    switch (true) {
        case (a.average >= 70):
           return(`man is: ${a.man}, and woman is: ${a.woman},their average is: ${a.average} you are compatible`)
        case (a.average >=60):
           return(`man is: ${a.man}, and woman is: ${a.woman},their average is: ${a.average} you are slightly compatible`)
        case(a.average >=50):
           return(`man is: ${a.man}, and woman is: ${a.woman},their average is: ${a.average} manageable`)
        case(a.average >=40):
           return(`man is: ${a.man}, and woman is: ${a.woman},their average is: ${a.average} dont marry`)

        default:
        return(`man is: ${a.man}, and woman is: ${a.woman},their average is: ${a.average} run for your life`)

    }
}

function callback(error) {
    console.error(`this error occoured: ${error}`);
}

doSomething.then((result) => anotherThing(result)).then((newResult)=> lastThing(newResult))
.then((finalResult) =>{
    console.log(`This is our verdict:${finalResult}`);
}).catch(callback)

