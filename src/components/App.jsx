import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Create_Area";

import info from "../notes";

function App() {

  const [notes, setNotes] = useState([...info]);

  //this is add note button
  function add_note(new_note) {
      // if (newNote.trim().length < 1){
      setNotes((prev_note) => {
        return [...prev_note, new_note];
      });
      // }
  }

  //delete the button note
  function delete_note(id) {
    setNotes((prev_note) => {
      return prev_note.filter((noteItem, index) => {
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
    // style = {{minHeight:"screen"}}
    <div>
      {/* header file */}
      <Header />
      <CreateArea onAdd={add_note} />
      {/* {cardComponents} */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={delete_note}
          />
        );
      })}
      {/* footer file */}
      <Footer />
    </div>
  );
}

export default App;
