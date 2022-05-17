const drk = document.querySelector('.mode')
const drks = document.querySelector('.tgb')
const brnd = document.querySelectorAll('.brnd img')


drk.addEventListener('click', ()=>{

    if(drks.classList.contains('ri-sun-fill') &&  !document.body.classList.contains('dark-theme') ){

        drks.classList.remove('ri-sun-fill')
        drks.classList.add('ri-moon-fill')
        document.body.classList.add('dark-theme');
        brnd.forEach(bran =>{
            bran.src='asset/img/white-logo.png'
        });
      
    }else if(drks.classList.contains('ri-moon-fill') && document.body.classList.contains('dark-theme')) {
        drks.classList.remove('ri-moon-fill')
        drks.classList.add('ri-sun-fill')
        document.body.classList.remove('dark-theme');
          brnd.forEach(bran =>{
            bran.src='asset/img/logo.png'
        });
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
           document.body.classList.remove('dark-theme');
            brnd.forEach(bran =>{
            bran.src='asset/img/logo.png'
        });
    }else if(localStorage.getItem("theme") == "dark"){
           drks.classList.remove('ri-sun-fill');
           document.body.classList.add('dark-theme');
           drks.classList.add('ri-moon-fill')
            brnd.forEach(bran =>{
            bran.src='asset/img/white-logo.png'
        });
    }else{
        localStorage.setItem("theme", "light")
    }
// }

// lcs();