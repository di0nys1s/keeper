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
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          className="form-input"
          name="title"
          value={note.title}
          placeholder="Title"
          required
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          className="form-area"
          name="content"
          placeholder="Take a note..."
          rows="3"
          required
        />
        <button type="submit" className="form-button">
          <p className="button-content">Add</p>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
