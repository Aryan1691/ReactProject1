import React, { useState } from 'react'
import note from './UseCont'


const noState =()=>{
const name={name:"Aryan"};

return(
    <note.Provider value={name}>
    
    </note.Provider>
)
}

export default noState;