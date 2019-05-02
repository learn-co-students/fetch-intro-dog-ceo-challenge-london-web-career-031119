const imageDiv = document.querySelector('div#dog-image-container')
const menu = document.querySelector('select#breeddropdown')
const choice = menu.options[menu.selectedIndex].value

// function dogFilter2() {
//     document.querySelector('#breeddropdown').addEventListener('change', event => {
//         console.log("test")
//     })
// }

menu.onchange = function () {
    document.querySelector('ul#dog-breeds').innerHTML = ""
    listDog(menu.value)
}



function dogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // console.log(json)
            let z = json
            z.message.forEach((x) => {
                // console.log(x)
                let img = document.createElement('IMG')
                img.src = `${x}`
                img.style.width = '25%'
                document.querySelector('div#dog-image-container').append(img)
            })
        })
}

function listDog(choice) {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // console.log(json["message"])
            const ul = document.querySelector('ul#dog-breeds')
            let z = json

            for (let [key, value] of Object.entries(z["message"])) {
                if (key[0].includes(choice) || choice == "all") {

                    if (value.length != 0) {
                        value.forEach((x) => {

                            let listItem = document.createElement('li')
                            listItem.innerText = `${key} : ${x}`
                            listItem.addEventListener('mousedown', () => {
                                listItem.style.color = "red"
                            })
                            listItem.addEventListener('mouseup', () => {
                                listItem.style.color = "black"
                            })

                            ul.append(listItem)
                        })

                    } else {
                        let listItem = document.createElement('li')
                        listItem.innerText = `${key}`
                        listItem.addEventListener('mousedown', () => {
                            listItem.style.color = "red"
                        })
                        listItem.addEventListener('mouseup', () => {
                            listItem.style.color = "black"
                        })
                        ul.append(listItem)
                    }
                } else {
                    console.log(key)
                }
            }

        })
}

function displayDog(dog) {
    const ul = document.querySelector('ul#dog-breeds')
    for (let [key, value] of Object.entries(dog)) {

        if (value.length != 0) {
            value.forEach((x) => {

                let listItem = document.createElement('li')
                listItem.innerText = `${key} : ${x}`
                listItem.addEventListener('mousedown', () => {
                    listItem.style.color = "red"
                })
                listItem.addEventListener('mouseup', () => {
                    listItem.style.color = "black"
                })

                ul.append(listItem)
            })

        } else {
            let listItem = document.createElement('li')
            listItem.innerText = `${key}`
            listItem.addEventListener('mousedown', () => {
                listItem.style.color = "red"
            })
            listItem.addEventListener('mouseup', () => {
                listItem.style.color = "black"
            })
            ul.append(listItem)
        }

    }
}

function test() {
    console.log("test")
}


listDog("all")
dogPics()

// const sample = {

//     "affenpinsch": []
// }

// displayDog(sample)