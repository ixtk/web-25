const email = "john@email.com"
const password = "supersecret"

// if (email === "admin@email.com" && password === "supersecret") {
//   console.log("Logged in!")
// } else {
//   console.log("Not permitted!")
// }

const itemPrice = 25
let quantity = 4

const totalPrice = itemPrice * quantity
  
let finalPrice = totalPrice
let couponCode = "SALE"

function applyDiscount(discountAmount) {
  finalPrice -= finalPrice * (discount / 100)
  finalPrice = finalPrice - finalPrice * (discountAmount / 100)
  console.log("Discount applied", finalPrice)
}

const sayHello = (name = "Guest") => {
  return `Hello, ${name}`
}

// const sayHello = (name) => `Hello, ${name}`

const greeting = sayHello("John")
console.log(greeting)

if (finalPrice >= 100) {
  applyDiscount(10)
} else if (couponCode === "SALE") {
  applyDiscount(50)
} else {
  console.log("No discount applied")
}

const names = ["John Doe", "Luke Skywalker", "Emmet Smith"]

let innitials = names.map((name) => {
  const [firstName, surname] = name.split(" ")
  return `${firstName[0]}. ${surname[0]}`
})

console.log(innitials)
