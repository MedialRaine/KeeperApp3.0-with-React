import React, { useState } from "react";
// This is the way to import the icons from the library of material-ui, it's better because they're
//already styled and also they're having some functions like the zoom and fab
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  //This time what we have done is just save the state of the variable is expanded for having a response
  //each time this will change, we initialize in false because at the begging is not clicked
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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

  //We create a function for expanding when it gets clicked.Once clicked then we just set true the value
  //of the variable
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          //here we just render in case if its true that is expanded
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : //otherwise we render nothing
        null}

        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
    //inside the textarea we introduce the onClick property for it calls the function expand and render
    //the title area, inside the rows we can render also in case is expanded to render in 3 rows, otherwise just 1
    //finally inside the property in of zoom, if we go to the documentation is in this property in which we can pass
    //the variable is expanded, so once is turned true then it will show the animation of the zoom out
    //also we have the components for calling the icons and the fab wich is just a floating active button.
  );
}

export default CreateArea;
