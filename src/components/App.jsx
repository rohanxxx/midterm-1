import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import info from "../notes";

function App() {
  const [notes, setNotes] = useState([...info]);

  function addNote(newNote) {
    if (newNote.trim().length !== 0){
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  /*
  const cardComponents = [];
  for (let i = 0; i < info.length; i++) {
    cardComponents.push(
      <Card
        key={info[i].key}
        id={info[i].key}
        title={info[i].title}
        content={info[i].content}
        onDelete={deleteNote}
      />
    );
  }*/

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {cardComponents} */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
