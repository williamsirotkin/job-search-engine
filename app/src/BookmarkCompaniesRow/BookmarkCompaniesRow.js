import React from 'react';
import './BookmarkCompaniesRow.css'

function BookmarkElement() {
    return (
        <div class = "bookmarkStack">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhiai2jewv7XGXhDeIbVHNIMQCxw6nVKGQkIWpga-uQO5fKNtXRmrqMMqybf_QB0pHzw&usqp=CAU" alt = "home depot"></img>
            <br></br>
            <button class = "view"> View Jobs </button>
            <br></br>
            <button class = "remove"> Remove</button>
        </div>
    )
}

function BookmarkedCompanies() {
    return (
        <div>
        <h1><center>Bookmarked Companies</center></h1>
        <div class = "row">
            <BookmarkElement/>
            <BookmarkElement/>
            <BookmarkElement/>
        </div>
        </div>
    )
}

export default BookmarkedCompanies;