import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    props.onAdd(note);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded ? (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onChange={handleChange}
          name="content"
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
