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

const save = (newVisitor, visitors) => {
  const isNotValid = visitors.filter(visitor => 
    newVisitor.email === visitor.email
  )
  if (!isNotValid[0]) {
    console.log('nan')
  } else {
    newVisitor.id = visitors.length + 2;
    visitors.push(newVisitor);
    console.log(visitors);
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

save(body, visitors)