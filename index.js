let time=document.getElementById('time')

setInterval(()=>{
   let date=new Date()
   let options={
    weekday:'long', month:'short', year:'numeric',
    day:'numeric', hour:'2-digit', minute:'2-digit',second:'2-digit'
   }
   let timeNow=date.toLocaleTimeString('en',options)
   time.innerHTML=timeNow
},100)