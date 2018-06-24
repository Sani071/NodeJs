

const fs = require('fs');
const faker = require('faker')

function generateData(){
    let persons = []

    for(let i=0; i<10; i++){
        person = {}
        person.name = faker.name.findName();
        person.email = faker.internet.email()

        persons.push(person)
    }
    return persons
}

console.log('Hello')
            fs.appendFile('person.json', JSON.stringify(generateData()), err => {
                if(err) {
                    throw new Error(`Error : ${err}`)
                }

                console.log('Write Successfull');
                
            })



// fs.writeFile('person.json', JSON.stringify(generateData()), (err) => {
//     if (err) throw err;
//     console.log('Write Successfull');
//   });






