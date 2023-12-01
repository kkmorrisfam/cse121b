/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

const sorted = (temples) => {
    let sorted = temples.sort( (a,b) => {
        if (a.templeName > b.templeName)
            return 1;
        else if (a.templeName < b.templeName)
            return -1;
        else
            return 0;
    });
    return sorted;
}

/* async displayTemples Function */
 const displayTemples  = (temples) => {   //pass in an array of objects, within this scope referred to as temples
    // console.log(temples);
    // console.log(templesElement);
    // console.log("displayTemples start->")
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
    // console.log("after forEach in displayTemples");
    // console.log(templesElement); 
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {      //pass in zero parameters, just do something, but use async and await
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();    
    displayTemples(sorted(templeList));
}

/* reset Function */
const reset = (templesElement) => {              //pass in html collection (not array), remove child elements  
    templesElement.innerHTML = "";    
}




/* sortBy Function */
const sortBy = function(temples) {    //eventually passes in the original Temples List array of objects.
    reset(templesElement);              //passing in the html elements that were created.
    // console.log(templesElement);
    let filter = document.getElementById('sortBy').value;
    // console.log("filter (sortBy): " + filter);  // shows what the vaule of the drop-down list is, that is chosen.
    let switchArray = [];

    switch(filter) {
        case "utah":        
            switchArray = temples.filter(t => t.location.includes("Utah"));               
            break;
        case "notutah":
            switchArray = temples.filter(t => !(t.location.includes("Utah")));            
            break;
        case "older":            
            switchArray = temples.filter((t) => (new Date(t.dedicated) < new Date(1950, 0, 1))); 
            break;
        default:  //all
            switchArray = temples;
    }   

    displayTemples(sorted(switchArray));
}

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {sortBy(templeList)});