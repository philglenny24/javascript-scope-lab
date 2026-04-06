// Step 1: Global Variables

const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';


// Step 2: Function

function addBurger() {
  const newBurger = 'Flatburger'; // function-scoped
  burgers.push(newBurger);
}

// Step 3: If Statement

if(true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }
}