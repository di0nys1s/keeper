import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreataArea";
import Note from "./Note";

const Home = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map(noteItem => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}
      <Footer />
    </div>
  );
};

export default Home;
