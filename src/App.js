import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateNote from './CreateNote'

const App = () => {
  const [addItem, setAddItem]=useState([]);
  const AddNote=(note)=>{
    setAddItem((prevData)=>{
      return[
        ...prevData,note
      ]
    })
    

  }
  return (
    <div>
      <Header/>
      <CreateNote passNote={AddNote}/>
   
      {
        addItem.map((value,index)=>{
          return(
            <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            />

          );

        }) }
      <Footer/>
    
    </div>
  )
}

export default App
