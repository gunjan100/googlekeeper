import React, { useState } from 'react'
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import './index.css'
const CreateNote = (props) => {

  const[note, setNote]=useState({
    title:"",
    content:"",
  })

  const InputEvent =(eveVal)=>{
    const {name, value}=eveVal.target
    setNote((preData)=>{
      return{
        ...preData,
        [name]:value,
      }
    })

  }

  const AddNote=()=>{
    props.passNote(note)
    setNote({
      title:"",
      content:"",

    });

  }


  return (
    <>
    <div className='main-box my-2 '>
      <form>
        <div className='center-div'>
        <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='Titel'  className='my-2 form-control ' />
        <textarea  id="" cols="30" rows="5" name='content' value={note.content} onChange={InputEvent} placeholder='Write a Note..' className='form-control' autoComplete='off'></textarea>
        <Fab color="primary" aria-label="add" onClick={AddNote}>
        <AddIcon />
      </Fab>
        </div>
      </form>
    </div>
    
    
    </>




  )
}

export default CreateNote