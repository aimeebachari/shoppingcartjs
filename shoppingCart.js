let juice = { itemName: 'juice', quantity: 2 };

let yogurt = { itemName: 'yogurt squeezers', quantity: 1 };

let bread = { itemName: 'potato bread', quantity: 1 };

let shoppingCart = [juice, yogurt, bread];

shoppingCart.forEach((item) => {
  console.log(`${item.itemName}: ${item.quantity}`);
});
