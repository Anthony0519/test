//trafic light

function traffic(){
    const red = setInterval(()=>{
        console.log(' red: stop')
    })
    setTimeout(() => {
        clearInterval(red)
    });

    setTimeout(() => {
        const yellow = setInterval(()=>{
            console.log('yellow: ready')
        })
        setTimeout(() => {
            clearInterval(yellow)
        }); 
    }, 30000);

    setTimeout(() => {
        const green = setInterval(()=>{
            console.log('green: Go')
        })
        setTimeout(() => {
            clearInterval(green)
        });
    }, 60000);
}
traffic()