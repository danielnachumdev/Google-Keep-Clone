import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=React.useState([]);
  function addNote(event){
    const {title,content}=event.target;
    const [titleValue, contentValue]=[title.value,content.value];
    title.value="";
    content.value="";
    setNotes(prevState=>{
      return [...prevState, {title: titleValue, content:contentValue}];
    });
    event.preventDefault();
  }
  function deleteItem(id){
    setNotes(prevState=>{
      return prevState.filter((item, index)=>index!==id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((item, index)=><Note key={index} id={index} title={item.title} content={item.content} deleteItem={deleteItem}/>)}
      <Footer />
    </div>
  );
}

export default App;
