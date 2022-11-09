import React from 'react';
import { useState } from 'react';
import './UniversityApply.css'

function UniversityElement() {
    return (
        <div class = "applyStack">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhiai2jewv7XGXhDeIbVHNIMQCxw6nVKGQkIWpga-uQO5fKNtXRmrqMMqybf_QB0pHzw&usqp=CAU" alt = "home depot"></img>
            <br></br>
            <button class = "view"> View Jobs </button>
        </div>
    )
}

function UniversityApplyRow() {
    const [elements, setElements] = useState([
        <UniversityElement/>,
        <UniversityElement/>,
        <UniversityElement/>,
      ]);

      const bookmarkElement = (index) => {
        //const newElements = elements.filter((_, i) => i !== index);
       // setElements(newElements);
      };

    return (
        <div>
            <h1><center> Students at your University often apply to </center></h1>
            <div class = "row">
                {elements.map((element, index) => (
                    <div key={index}>
                    {element}
                    <button class = "bookmark" onClick={() => alert("Bookmarked!!")}> Bookmark </button>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default UniversityApplyRow;