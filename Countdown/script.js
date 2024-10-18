const counters=document.querySelectorAll('.counter')

counters.forEach((counter)=>{
    counter.innerHTML=0;
// Using setInterval for repetitive updation of innerHTML of our element    
    let a=setInterval(()=>{
        const targetCount=Number(counter.getAttribute('data-target'))
        const startCount=Number(counter.innerHTML)
        const incr=targetCount/100;

        if(startCount<targetCount){
            counter.innerHTML=`${Math.round(startCount+incr)}`
        }
        else{
            counter.innerHTML=targetCount
            clearInterval(a)
        }
    },30)
})
