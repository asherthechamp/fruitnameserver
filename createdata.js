const fs = require('node:fs')

async function getData() {
     
    const countries_url = 'https://cdn.simplelocalize.io/public/v1/countries'
    const fruits_url = 'https://www.fruityvice.com/api/fruit/all'
    let data2 = await fetch(fruits_url)
    let fruits = await data2.json()
    let new_array = []
    let data1 = await fetch(countries_url)
    await data1.json().then(res1 => res1.forEach(el1 => {
        el1.languages.forEach(async (el2) => {
        fruits.forEach(el3 => 
                {
                    console.log(el3)
                    new_array.push({
                    "language": el2.name,
                    "fruit": el3.name,
                    "count": 0
                })
            })
        })
    }))
    const text = JSON.stringify(new_array)
    fs.writeFile("./data.json", text, () => {})
}

 getData()