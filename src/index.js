console.log('%c :DDDDD', 'color: firebrick')
//? GLOBAL VARS ******************************************

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedList = document.querySelector('#dog-breeds')
const dogCont = document.querySelector('#dog-image-container')
const options = document.querySelector("#breed-dropdown")

//? *****************************************************
let rexA = /^[A]/i
let rexB = /^[B]/i
let rexC = /^[C]/i
let rexD = /^[D]/i
//? *****************************************************

const renderDog = dog => {
    
    dog.message.forEach(dogImageURL => {
        let dogImg = document.createElement("img")
        dogImg.src = dogImageURL
        dogCont.append(dogImg)
    })
}

const renderDogList = dog => {

    let nameArray = Object.keys(dog.message)

    nameArray.forEach(dogBreeds => {
        let dogList = document.createElement("li")
            dogList.innerText = dogBreeds
            dogList.addEventListener("click", onListClick)
            breedList.append(dogList)
            
        })
    
    options.addEventListener('change', e => {
    if (e.target.value == 'a'){
        breedList.innerText = ""
        let results = nameArray.filter(str => rexA.test(str))
        sortList (results)
        console.log("a")
    } else if (e.target.value == 'b') {
        breedList.innerText = ""
        let results = nameArray.filter(str => rexB.test(str))
        sortList (results)
        console.log("b")
    } else if (e.target.value == 'c') {
        breedList.innerText = ""
        let results = nameArray.filter(str => rexC.test(str))
        sortList (results)
        console.log("c")
    } else if (e.target.value == 'd') {
        breedList.innerText = ""
        let results = nameArray.filter(str => rexD.test(str))
        sortList (results)
        console.log("d")
    }
    
})
}

function sortList (nameArray) {
    nameArray.forEach(dogBreeds => {
    let dogList = document.createElement("li")
        dogList.innerText = dogBreeds
        dogList.addEventListener("click", onListClick)
        breedList.append(dogList)
        
    })
}

//********************************************
//* Random color generator

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//********************************************
//* Rainbow effect

function onListClick(){
    setInterval(function(){ 
        document.querySelectorAll("#dog-breeds > li").forEach(item => {
            item.style.color = `${getRandomColor()}`
        })}, 300);       
}

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
        .then(renderDog) //! change at the end
}
init()
