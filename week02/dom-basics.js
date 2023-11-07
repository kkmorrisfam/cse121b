const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// create new img element
const newImage = document.createElement('img');
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.appendChild(newImage);

//create new section element
const newSection = document.createElement("section");
const newHeading = document.createElement("h2");
newHeading.innerText = ("CSE121b");
// newSection.setAttribute("h2", "CSE121b");
const newPara = document.createElement("p");
newPara.innerText = ("Welcome to Javascript Language");
// no: newSection.setAttribute("p", "Welcome to Javascript Language");

// newSection.appendChild(newSection);
newSection.appendChild(newHeading);
newSection.appendChild(newPara);
document.body.appendChild(newSection);