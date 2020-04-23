console.log(`Ciao , mi piace parlare italiano `)

 const pupill = document.getElementsByClassName("followMouse");

 document.onmousemove = () =>{
   let x = event.clientX * 100 / window.innerWidth + "%";
   let y = event.clientY * 100 / window.innerHeight + "%";
   for(let i=0;i<2;i++){
     pupill[i].style.left = x;
     pupill[i].style.top = y;
     pupill[i].style.transform = `translate(-${x},-${y})`;
   }
 }