import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [shwNote, setShwNote] = useState([]);

  function addNote(note) {
    if (note.title != "" || note.content != "") {
      setShwNote(preValue => {
        return [...preValue, note];
      });
    }
  }

  function delNote(id) {
    setShwNote(preItems => {
      return preItems.filter(item => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea shwnote={addNote} />
      <Note notes={shwNote} del={delNote} />
      <Footer />
    </div>
  );
}

export default App;
