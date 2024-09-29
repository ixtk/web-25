// const inventory = ["Laptop", "Smartphone", "Tablet"]

// for (let item of inventory) {
//   console.log(item)

//   for (let char of item) {
//     console.log(char)
//   }
// }

// for in
// for let i = 0; i < 50;  i += 5

const grades = [48, 56, 76, 23]

const studentData = {
  toby: 48,
  James: 56,
  kate: 51,
  George: 36,
  rick: 64,
  alex: 81
}

// for (let student in studentData) {
//   console.log(student, studentData[student])
// }

for (let [name, grade] of Object.entries(studentData)) {
  const [name, grade] = student
  console.log(name, grade)
}

const userData = {
  id: 1,
  name: "Leanne Graham",
  "user-name": "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
}

userData.address.city = "New York"

console.log("Hello World".split("e"))
