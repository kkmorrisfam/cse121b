/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
 const displayTemples  = (temples) => {   //pass in an array of objects, within this scope referred to as temples
    console.log(temples);
    console.log(templesElement);
    console.log("displayTemples start->")
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
    console.log("after forEach in displayTemples");
    console.log(templesElement); 
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {      //pass in zero parameters, just do something, but use async and await
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    // console.log(JSON.stringify(templeList));
    displayTemples(templeList);
}

/* reset Function */
const reset = (templesElement) => {              //pass in html collection (not array), remove child elements
    // let parent = document.getElementById("temples");  //one element with ID temples
    // console.log("temples (reset):  " + temples);
    
    // let child = parent.getElementsByTagName('article');
    // // let gchild = parent.child.querySelector('h3');
    // console.log("child(reset) : " + child);
    // parent.remove(child);   //removeChild did not work.
    // // child.remove(gchild);
    // console.log("child2 (reset) : " + child);
    // console.log("temples Element (reset) : " + templesElement);
    templesElement.innerHTML = "";    
}




/* sortBy Function */
const sortBy = function(temples) {    //eventually passes in the original Temples List array of objects.
    reset(templesElement);              //passing in the html elements that were created.
    console.log(templesElement);
    let filter = document.getElementById('sortBy').value;
    console.log("filter (sortBy): " + filter);  // shows what the vaule of the drop-down list is, that is chosen.
    switch(filter) {
        case "utah":
        console.log("switch Utah in sortBy/temples" + temples)  //includes all temples here
        let filteredArray = temples.filter( t => t.location.includes("Utah"));
        console.log(filteredArray);  //now includes 10 temples
        displayTemples(filteredArray);           
        
        break;
    }

}

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {sortBy(templeList)});