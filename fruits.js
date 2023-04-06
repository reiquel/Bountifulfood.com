document.addEventListener('DOMContentLoaded', () => {
    const fruitDataUrl = 'data.json'; // Replace with actual URL from the data source

    async function populateFruitOptions() {
        const response = await fetch(fruitDataUrl);
        const fruits = await response.json();
        const fruitSelects = document.querySelectorAll('#fruit1, #fruit2, #fruit3');

        fruits.forEach(fruit => {
            const option = document.createElement('option');
            option.value = JSON.stringify(fruit);
            option.innerText = fruit.name;
            fruitSelects.forEach(select => select.add(option.cloneNode(true)));
        });
    }

    function calculateNutrition(fruits) {
        let total = {
            carbohydrates: 0,
            protein: 0,
            fat: 0,
            sugar: 0,
            calories: 0
        };
    
        fruits.forEach(fruit => {
            total.carbohydrates += fruit.nutritions.carbohydrates;
            total.protein += fruit.nutritions.protein;
            total.fat += fruit.nutritions.fat;
            total.sugar += fruit.nutritions.sugar;
            total.calories += fruit.nutritions.calories;
        });
    
        return total;
    }
    

    function formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    let drinkCount = localStorage.getItem('submittedDrinkCount') || 0;
    drinkCount++;
    localStorage.setItem('submittedDrinkCount', drinkCount);

    function handleSubmit(event) {
        event.preventDefault();

        const output = document.getElementById('output');
        output.innerHTML = '';

        const order = {
            firstName: document.getElementById('firstName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            fruits: [
                JSON.parse(document.getElementById('fruit1').value),
                JSON.parse(document.getElementById('fruit2').value),
                JSON.parse(document.getElementById('fruit3').value)
            ],
            specialInstructions: document.getElementById('specialInstructions').value
        };

        const nutrition = calculateNutrition(order.fruits);

        const orderDate = new Date();

        output.innerHTML = `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${order.firstName}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Fruits:</strong> ${order.fruits.map(fruit => fruit.name).join(', ')}</p>
            <p><strong>Special Instructions:</strong> ${order.specialInstructions || 'N/A'}</p>
            <p><strong>Order Date:</strong> ${formatDate(orderDate)}</p>
            <h3>Nutrition</h3>
            <p><strong>Carbohydrates:</strong> ${nutrition.carbohydrates.toFixed(2)} g</p>
            <p><strong>Protein:</strong> ${nutrition.protein.toFixed(2)} g</p>
            <p><strong>Fat:</strong> ${nutrition.fat.toFixed(2)} g</p>
            <p><strong>Sugar:</strong> ${nutrition.sugar.toFixed(2)} g</p>
            <p><strong>Calories:</strong> ${nutrition.calories.toFixed(2)} kcal</p>
        `;
    }

    document.getElementById('drinkForm').addEventListener('submit', handleSubmit);

    populateFruitOptions();
});


// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const drinkForm = document.getElementById("drinkForm");
  
    // Update the total number of submitted specialty drinks on form submission
    drinkForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let totalDrinks = localStorage.getItem("totalDrinks");
      if (totalDrinks === null) {
        totalDrinks = 0;
      } else {
        totalDrinks = parseInt(totalDrinks);
      }
  
      totalDrinks++;
      localStorage.setItem("totalDrinks", totalDrinks);
    });
  });
  