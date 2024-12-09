// Function to add ingredients to the selected list
document.getElementById('add-ingredient-button').addEventListener('click', function() {
    // Get the input field and the selected ingredients list
    const inputField = document.getElementById('ingredient-input-field');
    const selectedIngredientsList = document.getElementById('selected-ingredients-list');


    const ingredients = inputField.value.split('\n').map(item => item.trim()).filter(item => item);

    // // Clear the input field
    inputField.value = '';
 

    // Display the selected ingredients
    ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('div');
        ingredientItem.textContent = ingredient;
        selectedIngredientsList.appendChild(ingredientItem);
    });
});
const button1 =document.getElementById('btn1').addEventListener('click',function(){
window.location.href="recipes_suggestion.html"
});
const button2 =document.getElementById('btn2').addEventListener('click',function(){
window.location.href="steps.html"
});

