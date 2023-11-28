/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];


/* async displayTemples Function */
const displayTemples  = (temples) => {   //pass in an array, within this scope referred to as temples
    
    temples.forEach((temple) => {       //for each element in the array, within this scope identified as temple
        let article = document.createElement('article'); 
        let h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', temple.imageUrl);
        imgElement.setAttribute('alt', temple.location);
        article.appendChild(h3Element);
        article.appendChild(imgElement);
        templesElement.appendChild(article);        
    });
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    console.log(JSON.stringify(templeList));
    displayTemples(templeList);
}

/* reset Function */
const reset = () => templeList = [];


/* sortBy Function */
const sortBy = function(temples) {
    reset();
    let filter = document.getElementById(sortBy);
    console.log(filter);
    let value = filter.value;
    console.log(value);
    switch(value) {
        case "utah":
        //do something
        ;
        break;
    }

}


getTemples();

/* Event Listener */
