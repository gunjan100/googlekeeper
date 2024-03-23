import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
  return (
    <>
    <div className='col-3'> {/* Each note occupies 3 columns out of 12 */}
      <div className='note shadow-lg'>
        <h6>{props.title}</h6>
        <p>{props.content}</p>
        <Fab color="primary" aria-label="add">
          <DeleteOutlineIcon />
        </Fab>
      </div>
    </div>
    
    </>
  )
}

export default Note
