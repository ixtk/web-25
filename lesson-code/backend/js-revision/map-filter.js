const shoppingCartItems = [
  { name: "Smartphone", price: 600 },
  { name: "Laptop", price: 999.99 },
  { name: "Headphones", price: 79.99 },
  { name: "Backpack", price: 49.99 }
]

// forEach, filter, map

shoppingCartItems.forEach(function(item) {
  console.log(item.name, 'costs', item.price)
})

// console.log(result)

const expensiveItems = shoppingCartItems.filter(item => item.price > 500)

const itemNames = expensiveItems.map(function (item) {
  return `${item.name} costs ${item.price}`
})
