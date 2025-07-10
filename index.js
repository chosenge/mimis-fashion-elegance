var date = new Date().getFullYear();
document.getElementById("year").textContent = date;


// function toggleDropdown(){
//     document.getElementById("#myDropdown").classList.toggle("show")
// }
var a = document.querySelector("dropdown-cont")
var b = document.getElementById("drop")
b.addEventListener("click", ()=>{
    a.classList.toggle("show")
})
// window.onclick = function(event) {
//     if(! event.target.matches(".dropdownbutton")){
//         var dropdowns = document.getElementsByClassName("dropdown-cont");
//         for (let i=0; i < dropdowns.length; i++){
//             dropdowns[i].classList.remove("show");
//         }
//     }
// }
