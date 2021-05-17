import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addNote}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
