var navbar = document.getElementById('navbar');
var menubar = document.getElementById('menubar');
var faTimes = document.getElementById('fa-times');

menubar.addEventListener('click',function(){
  navbar.classList.toggle('mobile-menu');
  
})

faTimes.addEventListener('click',function(){
  navbar.classList.remove('mobile-menu');
})

// function displayMenu(){
//     navbar.style.right = "0"
// }

// function closeMenu(){
//     navbar.style.right = "-180px" 
// }


// for fixed navbar
window.onscroll = () =>{

  menubar.classList.remove('fa-times');
  navbar.classList.remove('mobile-menu');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('mobile-menu');
  }else{
    document.querySelector('#scroll-top').classList.remove('mobile-menu');
  }

}

// var menubar = document.querySelector('#menubar');
// var navbar = document.querySelector('.navbar');

// menubar.addEventListener('click', function(){
//     navbar.classList.toggle('mobile-menu')
    
// })



// TESTIMONIAL SECTION BEGINS
const reviews = [
    {
      id: 1,
      name: "Jessica Wales",
      job: "web developer",
      img: "Kids-Images/person-2.PNG",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "Kids-Images/person-3.jpeg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "Kids-Images/person-1.jpeg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "Kids-Images/person-4.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 5,
      name: "Ellish ander",
      job: "Marketer",
      img: "Kids-Images/person-5.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  
  //starting items 
  let currentReview = 0;
  
    window.addEventListener('DOMContentLoaded', function(){
      showPerson()
    });
  
    function showPerson(){
      const item = reviews[currentReview];
      img.src= item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    }
  
    nextBtn.addEventListener('click',function(){
      currentReview++
      if(currentReview > reviews.length - 1){
          currentReview = 0
      }
      showPerson();
    });
  
    prevBtn.addEventListener('click',function(){
      currentReview--
      if(currentReview < 0){
          currentReview = reviews.length - 1;
      }
      showPerson();
    });
  
    randomBtn.addEventListener('click',function(){
      currentReview = Math.floor(Math.random()* reviews.length);
      showPerson();
    });
  // TESTIMONIAL SECTION ENDS
  
  
  // CHAT SECTION
  function openForm() {
    document.getElementById("myForm").style.display = "block"; 
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  // CHAT SECTION ENDS

  // ENROLL SECTION PASSWORD VISIBILITY
//   let togglePassword = document.querySelector('#togglePassword');
//   let myPassword = document.getElementById("myPassword");

//   togglePassword.addEventListener('click',function(){
    
//     if(myPassword.type === "password"){
//         myPassword.type = "text"
//     } 
   
//     else{
//         myPassword.type = "password"
//     } 
// })
//ENROLL FORM PREVENT DEFAULT
let enrollForm = document.querySelector('#form-enroll');
let userName = document.querySelector('#name');
let psw = document.querySelector('#myPassword');
let msg = document.querySelector('#msg');

enrollForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault()

  if(userName.value === '' || psw.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all field';
    
    setTimeout(() =>msg.remove(), 2000);
    }
}

//ENROLL TOGGLEPASSWORD
function togglePassword(){
  let myPassword = document.getElementById("myPassword");
  if(myPassword.type === "password"){
      myPassword.type = "text"
  } 
 
  else{
      myPassword.type = "password"
  } 
}

