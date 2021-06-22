import React from "react";

function Home(){
  const books = [
    {
      title : "Software Engineering With Java",
      author : "Sarujan P",
      id : 1
    },{
      title : "Software Engineering With C-Sharp",
      author : "Vinuja P",
      id : 2
    },{
      title : "Software Engineering With Java Script",
      author : "Shalini P",
      id : 3
    },{
      title : "Software Engineering With Python",
      author : "Sinthujan P",
      id : 4
    }
  ]
  return(
    <div>
      {books.map(book => (
        <div className="home-preview" key={book.id}>
          <h1>{book.title}</h1>
          <p>Author - {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;