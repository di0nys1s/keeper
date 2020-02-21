import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          className="form-input"
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          className="form-area"
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="form-button">
          <p className="button-content">Add</p>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
