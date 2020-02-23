import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        {isExpanded ? (
          <input
            onChange={handleChange}
            className="form-input"
            name="title"
            value={note.title}
            placeholder="Title"
            required
          />
        ) : null}

        <textarea
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          className="form-area"
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 2 : 1}
          required
        />

        <Zoom in={isExpanded}>
          <Fab type="submit" className="form-button">
            <p className="button-content">
              <AddIcon className="form-button-detail" />
            </p>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
