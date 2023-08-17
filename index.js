const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById('root')
    const header = document.createElement('h1')
    header.textContent = 'FREELANCERS'
    root.appendChild(header)

    const list = document.createElement('ul')
    root.appendChild(list)

    users.forEach((user) => {
        const liName = document.createElement('li')
        liName.textContent = user.name
        list.appendChild(liName)

        const innerUL = document.createElement('ul')
        const liAge = document.createElement('li')
        liAge.textContent = `Age: ${user.age}`

        const liOcc = document.createElement('li')
        liOcc.textContent = `Occupation: ${user.occupation}`

        innerUL.appendChild(liAge)
        innerUL.appendChild(liOcc)
        list.appendChild(innerUL)
    })
}

//call the main function
main();