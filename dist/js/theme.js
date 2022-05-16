const drk = document.querySelector('.mode')
const drks = document.querySelector('.tgb')


drk.addEventListener('click', ()=>{

    if(drks.classList.contains('ri-sun-fill') &&  !document.body.classList.contains('dark-theme') ){

        drks.classList.remove('ri-sun-fill')
        drks.classList.add('ri-moon-fill')
        document.body.classList.add('dark-theme');
    }else if(drks.classList.contains('ri-moon-fill') && document.body.classList.contains('dark-theme')) {
        drks.classList.remove('ri-moon-fill')
        drks.classList.add('ri-sun-fill')
        document.body.classList.remove('dark-theme');
         
    }

    
   if(localStorage.getItem("theme") == "light"){
       localStorage.setItem("theme", "dark")
    //    alert('dark')
    }else{
        localStorage.setItem("theme", "light")
        // alert('light')
   }
//    lcs();
   
})


// const lcs = function(){

    if(localStorage.getItem("theme") == "light"){
            drks.classList.add('ri-sun-fill');
            drks.classList.remove('ri-moon-fill')
            console.log("light")
           document.body.classList.remove('dark-theme');
    }else if(localStorage.getItem("theme") == "dark"){
           drks.classList.remove('ri-sun-fill');
           document.body.classList.add('dark-theme');
           drks.classList.add('ri-moon-fill')
           console.log("dark")
    }else{
        localStorage.setItem("theme", "light")
    }
// }

// lcs();