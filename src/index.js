const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  displayDogs();
  displayBreeds();
  filterDogs();
});

makeCall = url => {
  return fetch(url).then(resp => resp.json());
};

displayDogs = () => {
  const dogContainer = document.getElementById("dog-image-container");
  makeCall(imgUrl).then(res => {
    res.message.forEach(element => {
      let newImg = document.createElement("img");
      newImg.src = element;
      dogContainer.appendChild(newImg);
    });
  });
};

displayBreeds = () => {
  const breedContainer = document.getElementById("dog-breeds");
  makeCall(breedUrl).then(res => {
    Object.keys(res.message).forEach(element => {
      let listItem = document.createElement("li");
      listItem.textContent = element;
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", () => {
        listItem.style.color = getRandomColor();
      });
      breedContainer.appendChild(listItem);
    });
  });
};

getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

filterDogs = () => {
  const dropdown = document.getElementById("breed-dropdown");
  dropdown.addEventListener("change", e => {
    const breedContainer = document.getElementById("dog-breeds");
    breedContainer.innerHTML = "";
    makeCall(breedUrl).then(res => {
      Object.keys(res.message)
        .filter(item => {
          return item.charAt(0) == e.target.value;
        })
        .forEach(element => {
          console.log("in here");
          let listItem = document.createElement("li");
          listItem.textContent = element;
          listItem.style.cursor = "pointer";
          listItem.addEventListener("click", () => {
            listItem.style.color = getRandomColor();
          });
          breedContainer.appendChild(listItem);
        });
    });
  });
};
