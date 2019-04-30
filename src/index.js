const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

window.onload = () => {
  const dropdown = document.getElementById('breed-dropdown')
  getImages();
  getBreeds();
  dropdown.onchange = () => {
    removeBreeds();
  }
}


const getImages = () =>
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => addImages(data.message))

const getBreeds = () =>
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => addBreeds(data.message))

const addImg = (url) => {
  const img = document.createElement('img');
  img.src = url;
  return img;
}

const addImages = (arr) => {
  const imgArr = arr.map(addImg);
  const dogImageContainer = document.getElementById('dog-image-container');
  imgArr.map( img => dogImageContainer.appendChild(img) ); 
}

const addBreeds = (breedsObj) => {
  let filterKey = document.getElementById('breed-dropdown').value;
  const dog_breeds = document.getElementById('dog-breeds');
  const filterd = Object.keys(breedsObj).filter(breed => breed.startsWith(filterKey))
  const breedList = filterd.map( key => addBreed(key, breedsObj[key]) );
  breedList.map(el => dog_breeds.appendChild(el));
}

const addBreed = (breed, subBreed) => {
  const li = document.createElement('li');
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');
  const subList =  subBreed.map(addSubBreed);
  
  h4.onclick = styleColor;
  h4.innerText = breed;
  subList.map(subBreed => ul.appendChild(subBreed));
  li.appendChild(h4).appendChild(ul);
  return li;
}

const addSubBreed = (sB) => {
  const li = document.createElement('li');
  li.innerText = sB;
  li.onclick = styleColor;
  return li;
}

const styleColor = () => {
  event.target.style.color = "red";
}

const removeBreeds = () => {
  const dog_breeds = document.getElementById('dog-breeds');
  while (dog_breeds.hasChildNodes()) {
    dog_breeds.removeChild(dog_breeds.firstChild);
  }
  getBreeds();
}