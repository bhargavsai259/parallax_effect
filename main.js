
//// iam applied in index page 


const parallax = document.getElementById('parallax');

window.addEventListener("scroll",function ()
{

    let offset= window.pageYOffset;//speedof the slider
    parallax.style.backgroundPositionY=offset*0.9+"px";      

})
const parallax2 = document.getElementById('parallax2');

window.addEventListener("scroll",function ()
{

    let offset= window.pageYOffset;//speedof the slider
    parallax2.style.backgroundPositionY=offset*0.9+"px";

})
