let menuIcon = document.querySelector(".fa-bars");

let menuShow = document.querySelector(".menuShow");

let Show = false;

menuIcon.addEventListener('click',()=>{
  if(!Show){
    menuShow.style.display = "block";
    Show = true;
  }  
  else{
    menuShow.style.display = "none";
    Show = false;

  }
});
// countDown starts 

let fifty = document.querySelector(".fifty") ;
let twenty = document.querySelector(".twenty") ;
let ten = document.querySelector(".ten") ;
let two = document.querySelector(".two") ;

let count = 0;
let intervel = setInterval(()=>{
  fifty.textContent = count;
    count++;
  if (count > 50){
   clearInterval(intervel)
  }
},100)

 let count1 =0;
let intervel1 = setInterval(() => {
  twenty.textContent = count1;
    count1++;
  if (count1 > 20){
   clearInterval(intervel1)
  }
}, 300);

let count2 = 0 ;
let intervel2 = setInterval(() => {
  ten.textContent = count2;
  count2++;
  if (count2 >10){
    clearInterval(intervel2)
  }
},700)

let count3 = 0;
let intervel3 = setInterval(()=>{
  two.textContent = count3;
  count3++;
  if(count3 > 2){
    clearInterval(intervel3)
  }
},1000)
// responsive Tablet

// function openSidebar(){
// menubar.classList.add('show')
// menubar.removeAttribute('inert','')
// openButton.setAttribute('aria-expanded', 'true')
// }

// function closeSidebar(){
// menubar.classList.remove('show')
// menubar.setAttribute('inert', '')
// openButton.setAttribute ('aria-expanded','false');
// }
// ********
let fName = document.getElementById("fName");
let lName = document.querySelector("#lName");
let email = document.querySelector("#email");
let phone = document.querySelector('#phone');
let submitBtn = document.querySelector(".submitBtn");
let Error = document.querySelector(".Error");

submitBtn.addEventListener("click",()=>{
let firstName = fName.value ;
let lastName = lName.value ;
let Email = email.value;
let PhoneNumber = phone.value;
if (firstName === ""){
 Error.textContent = "Inter Your Name";
}
else{
  Error.textContent = "";
}
if (Email === "" || !Email.includes("@") || !Email.includes(".")){
   Error.textContent = "Inter Your valid Email ";
}
if(PhoneNumber === "" || isNaN(PhoneNumber) || PhoneNumber.length !==11){
Error.textContent = "Enter Your valid PhoneNumber ";
}
})

