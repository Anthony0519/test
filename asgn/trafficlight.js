const  traffic=()=>{
    const green=setInterval(()=>{
        console.log("Go :green color")
    },1000)
    
    setTimeout(()=>{
        clearInterval(green)
        console.log("stop moving")
    },11000)
    
    
    
    
    setTimeout(()=>{
        const yellow=setInterval(()=>{
            console.log("ready:yellowcolor")
        },1000)
    
        setTimeout(()=>{
            clearInterval(yellow)
            console.log("yellow has stopped")
            
            },5000)},12000)
    
    
    
    
    
    
    
    
    
    setTimeout(()=>{
        const red=setInterval(()=>{
            console.log("stop:red color")
        },1000)
       setTimeout(()=>{
        
    clearInterval(red)
    console.log("i am done running")
       },10000) 
    },18000)
    
    }
    
    
    
    
    
    
    
    traffic()
    
    setInterval(()=>{
        traffic()
    },27000)