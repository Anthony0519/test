function wait(ms){
    return new Promise((resolve) =>{
        setTimeout(resolve, ms);
    })
}
wait(5000).then(()=>{
    console.log(`the class is over for today`)
})