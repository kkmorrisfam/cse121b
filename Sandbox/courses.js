// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [  //create array of sections
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    
  };

  const bCourse = {
    code: "Eng1B",
    name: "English Language",
    sections: [  //create array of sections
    {   sectionNum: 1, 
        roomNum: 'ETC 301', 
        enrolled: 26, 
        days: 'MW', 
        instructor: 'Bro G'},

    {   sectionNum: 2, 
        roomNum: 'ETC 237', 
        enrolled: 28, 
        days: 'MW', 
        instructor: 'Sis T'},
    ],
  };

  //Create a function to set the name and number of the course in the HTML. 
  //Pass the course object into your function (remember that you can use the 
  //dot notation to access the parts of an object.)
function setCourse(courseObject) {
    let nameCourse = document.getElementById("courseName");
    let numberCourse = document.getElementById("courseCode");
    //set the element contents to Object name and code/number
    nameCourse.textContent = courseObject.name;
    numberCourse.textContent = courseObject.code;
}

//{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
function outputSection(courseObject) {
    // let outputSection = document.getElementById("sectionNumber");
    // let sectionNum = document.querySelector("#")
    const html = courseObject.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
      );
      document.querySelector("#sections").innerHTML = html.join("");
}

  setCourse(aCourse);
  setCourse(bCourse);
  outputSection(aCourse.sections);
  outputSection(bCourse.sections);