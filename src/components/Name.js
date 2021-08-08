import React,{useState} from 'react'

function Name(){
const[name,setName]=useState('')

return(
    <label className='header-name'>
    <input
    value={name}
    onChange={e => setName(e.target.value)}
    onClick={e=> e.target.setSele}
    onClick={e=> e.target.setSelectionRange(0,e.target.value.length)}
   
    />
    </label>
 
)
}

export default Name;