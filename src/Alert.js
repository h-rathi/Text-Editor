import React, { useState } from 'react'

export default function Alert(props) {
  // const a=setTimeout(()=>{
  //   `${props.nf.msg}:${props.nf.stt}`
  // }, 2000);
  const caps=(inpt)=>{
    
    return inpt[0].toUpperCase()+inpt.slice(1)
     
  }
//  {`${props.nf.stt[0].toUpperCase()+props.nf.stt.slice(1)}`}: {props.nf.msg}
  return (
    <div style={{height:'50px'}}>
      {
    props.nf &&
    <div  >
      
      <div style={{height:'40px'}} className="alert alert-success" role="alert">
      {caps(props.nf.stt)}: {props.nf.msg}

</div>
    </div>
    }
    </div>
  )
}
 