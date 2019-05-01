console.log('%c :DDDDD', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

const renderDog = dog => {
    const dogCont = document.querySelector('#dog-image-container')

    dog.message.forEach(dogImageURL => {
        let dogImg = document.createElement("img")
        dogImg.src = dogImageURL
        dogCont.append(dogImg)
    })
}

const renderDogList = dog => {
    const breedList = document.querySelector('#dog-breeds')

    let nameArray = Object.keys(dog.message)
    nameArray.forEach(dogBreeds => {

        let dogList = document.createElement("li")
        dogList.innerText = dogBreeds

        dogList.addEventListener("click", onListClick)
        

        breedList.append(dogList)
        
    })
    
    // const list = document.querySelector('#dog-breeds > li')
    // list.addEventListener("click", onListClick)
}
function onListClick(colorValue){

        // let list = document.querySelectorAll('#dog-breeds > li')
        let picker = document.createElement("input")
        
        picker.setAttribute('type', 'color', 'id', 'colour', 'name', 'colour', 'value', `${colorValue}`)
        list.prepend(picker)
}
// function onListClick(){
    
// }

//********************************************
//* Server Callz

const getDogs = () =>
    fetch(imgUrl)
        .then(resp => resp.json())

const getBreeds = () => 
    fetch(breedUrl)
        .then(resp => resp.json())

const init = () => {
    getBreeds()
        .then(renderDogList)
    getDogs()
        .then(renderDog)
}
init()
