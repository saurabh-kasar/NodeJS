
const user = {
    name: 'Saurabh',
    age: 25,
    location: 'Pune'
}

const {name, location, degree = 'BE'} = user

console.log(degree)