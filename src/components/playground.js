const { vi } = require("date-fns/locale");

const visitors = [
  {
    id: 1,
    first_name: 'Daimhin',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'fupke@dugah.seven',
    password: 'password'
  },
  {
    id: 2,
    first_name: 'Andy',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'andy@email.com',
    password: 'password'
  },
  {
    id: 3,
    first_name: 'Travis',
    last_name: 'Borsa',
    phone: 4382165851,
    email: 'travis@email.com',
    password: 'password'
  },
  {
    id: 4,
    first_name: 'Hafiz',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'hafiz@email.com',
    password: 'password'
  },
  {
    id: 6,
    first_name: 'Ali',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'ali@email.com',
    password: 'password'
  }
]

const save = (visitor, visitors) => {
  const isNotValid = visitors.filter((vis) => {
    visitor.email === vis.email
  })
   if (isNotValid[0] === undefined) {
     return false
   } else {
     visitor.id = visitors.length + 2;
     visitors.push(visitor)
     console.log(visitors)
   }
}
let body = {
  id: 0,
  first_name: 'name',
  last_name: 'last',
  phone: 778,
  email: 'andy@email.com',
  password: 'pass'
}
// const addNewVisitor = (selectedVisitor, visitors) => {

//   const resultVisitor = data.filter(visitor => 
//     visitor.email === selectedVisitor.email &&
//     visitor.password === selectedVisitor.password
//   ) 
//   return resultVisitor[0]
// };

// const body = {
//   email: 'andy@email.com',
//   password: 'passwordd'
// }
save(body, visitors)