//Variables for Hamburger Button 
const hamburger = document.getElementsByClassName('hamburger')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]

//Adding Event Listener for my button and menubar for a tablet and Phone view
hamburger.addEventListener('click', () => {
  menubar.classList.toggle('active')
})

//The function is for searching in for the Food Section 
const search = () => {

  //CaLling the id Search for the Input and making the value input to an uppercase 
  const searchBox =  document.getElementById("search").value.toUpperCase();

  //Getting the whole food list 
  const storeitems = document.getElementById("food-list")

  // This will display the card box div when the user input in the searchBox variable
  const foods = document.querySelectorAll(".card-shadow")

  /* This will search for the name in the H3 Tag of the Card Box an Example is 
  searching Adobo with the use of the Store Items and it will find the Adobo h3 tag
  */
  const foodName = storeitems.getElementsByTagName("h3")

  
  // This part will be displaying the Error if no recipe is searched
  let noResult = document.querySelector('p')

  //Search Filter for the Food Recipe


  // variable found called for boolean and set to false
  let found = false;

  /* i use the for loop and call the foodName variable  and get the length of it
    and match var will be the responsible for the output of searched
  */
  for(let i = 0; i < foodName.length; i++){
    let match = foods[i].getElementsByTagName('h3')[0];
    // if else and with the condition match and get the expression if one is true on the OR operation
    if(match){
      let textValue = match.textContent || match.innerHTML

    // then textvalue condition will be responsible if there is a recipe or not
      if(textValue.toUpperCase().indexOf(searchBox) >  -1){
        foods[i].style.display = "";
        found = true;
      }else{
        foods[i].style.display = "none";
      }
    }
  }
  if (found){
    noResult.style.display = "none";
  }
  else{
    noResult.style.display = '';
  }
}

// The 'x' icon in search bar will clear the input
function clearInput() {
let clearSearch = document.getElementById('search').value =""
}

// variables for the contact form of the page 
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector("#success")
const error = document.querySelectorAll(".error")

/* The function will validate the form if there is a name and email and messages have a input and 
Follow the requirement if its valid
*/

function validateForm(){

  clearMessage()
  let errorMessage = false;

  if(nameInput.value.length < 1){
    error[0].innerText = "\u0021 Name cannot be blank";
    nameInput.classList.add("error")
    errorMessage = true;
  }

  if(!validEmail(emailInput.value)){
    error[1].innerText = "\u0021 Invalid Email Address";
    emailInput.classList.add("error")
    errorMessage = true;
  }

  if(messageInput.value.length < 1){
    error[2].innerText = "\u0021 Please Enter a Message";
    messageInput.classList.add("error")
    errorMessage = true;
  } 

  if (!errorMessage){
    success.innerText = "Message Sent"
    window.history.back()
  }
}

// call the function for validateForm and wil clear the input if its reload
function clearMessage(){
  for(let i = 0; i < error.length; i++){
    error[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error")
  emailInput.classList.remove("error")
  messageInput.classList.remove("error")
}

//this will check the email if its an valid email
function validEmail(emailInput){
  let symbol = /\S+@\S+\.\S+/;
  return symbol.test(emailInput);
}


//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 
function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display ="block"
}
function get2ndRecipe(){
  document.querySelector(".second-meal-detail").style.display = "block"
}
function get3rdRecipe(){
  document.querySelector(".third-meal-detail").style.display = "block"
}
function get4thRecipe(){
  document.querySelector(".four-meal-detail").style.display = "block"
}
function get5thRecipe(){
  document.querySelector(".five-meal-detail").style.display = "block"
}
function get6thRecipe(){
  document.querySelector(".six-meal-detail").style.display = "block"
}
function get7thRecipe(){
  document.querySelector(".seven-meal-detail").style.display = "block"
}
function get8thRecipe(){
  document.querySelector(".eight-meal-detail").style.display = "block"
}
function get9thRecipe(){
  document.querySelector(".nine-meal-detail").style.display = "block"
}
function get10thRecipe(){
  document.querySelector(".ten-meal-detail").style.display = "block"
}
function get11thRecipe(){
  document.querySelector(".eleven-meal-detail").style.display = "block"
}




//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".meal-detail").style.display = "none"
  document.querySelector(".second-meal-detail").style.display = "none"
  document.querySelector(".third-meal-detail").style.display ="none"
  document.querySelector(".four-meal-detail").style.display ="none"
  document.querySelector(".five-meal-detail").style.display ="none"
  document.querySelector(".six-meal-detail").style.display ="none"
  document.querySelector(".seven-meal-detail").style.display ="none"
  document.querySelector(".eight-meal-detail").style.display ="none"
  document.querySelector(".nine-meal-detail").style.display ="none"
  document.querySelector(".ten-meal-detail").style.display ="none"
  document.querySelector(".eleven-meal-detail").style.display ="none"
}

// Handle goal form submission
document.getElementById("goal-form")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const calories = document.getElementById("calories").value;
  const protein = document.getElementById("protein").value;
  const carbs = document.getElementById("carbs").value;
  const fats = document.getElementById("fats").value;

  const userGoals = { weight, calories, protein, carbs, fats };
  localStorage.setItem("userGoals", JSON.stringify(userGoals));
  alert("Goals saved! Recipes will be tailored to your targets.");
  // Redirect to a recipes page or refresh the form
});
const getrecipes=document.getElementById('submit').addEventListener('click',function(){
window.location.href="index.html"
});
document.addEventListener('DOMContentLoaded', function() {
  const userGoals = JSON.parse(localStorage.getItem('userGoals'));

  if (userGoals) {
      const { calories } = userGoals;

      // Example dishes array
      const dishes = [
          { name: 'Sisig', calories: 300 },
          { name: 'Adobo', calories: 400 },
          { name: 'Sinigang', calories: 350 },
          { name: 'Omelette', calories: 250 },
          { name: 'Lumpia', calories: 200 },
          { name: 'Longaniza', calories: 450 },
          // Add more dishes as needed
      ];

      // Filter dishes based on user's calorie goal
      const filteredDishes = dishes.filter(dish => dish.calories <= calories);
      const resultDiv = document.querySelector('.result');
      resultDiv.innerHTML = '<h1>Your Recommended Dishes:</h1>';

      if (filteredDishes.length > 0) {
          filteredDishes.forEach(dish => {
              resultDiv.innerHTML += `<p>${dish.name} - ${dish.calories} calories</p>`;
          });
      } else {
          resultDiv.innerHTML += '<p>No dishes found that meet your criteria.</p>';
      }
  } else {
      const resultDiv = document.querySelector('.result');
      resultDiv.innerHTML = '<p>Please set your goals first.</p>';
  }
});
function submitGoals() {
  const weight = document.getElementById('weight').value;
  const calories = document.getElementById('calories').value;
  const protein = document.getElementById('protein').value;
  const carbs = document.getElementById('carbs').value;
  const fats = document.getElementById('fats').value;

  // Store the data in localStorage
  localStorage.setItem('userGoals', JSON.stringify({
      weight,
      calories,
      protein,
      carbs,
      fats
  }));

  // Redirect to index.html
  window.location.href = 'index.html';
}
