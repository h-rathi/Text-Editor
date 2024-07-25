import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

export default function Cmp(props) {
  
  
  // document.querySelector('body').style.backgroundColor='black'
  const pxn= ()=>{
    if(props.vln=='dark'){
      
      document.querySelector('body').style.backgroundColor='white';
      props.nph('light')
      // alt1('light mode enabled','sucessfully applied');
    }
    else{
      props.clrn1('red')
      
      document.querySelector('body').style.backgroundColor='red';
      props.nph('dark')
      // alt1('dark mode enabled','sucessfully applied');
    }
  }
  
  let p='';
  let pn='';
  let xp='light mode'

  
  



  const pxn1=()=>{
    if(props.vln=='dark'){
      
      document.querySelector('body').style.backgroundColor='white';
      props.nph('light')
      // alt1('light mode enabled','sucessfully applied');
    }
    else{
      props.clrn1('green')
      
      document.querySelector('body').style.backgroundColor='green';
      props.nph('dark')
      // alt1('dark mode enabled','sucessfully applied');
    }
  }
  const pxn2=()=>{
    if(props.vln=='dark'){
      
      document.querySelector('body').style.backgroundColor='white';
      props.nph('light')
      // alt1('light mode enabled','sucessfully applied');
    }
    else{
      props.clrn1('purple')
      
      document.querySelector('body').style.backgroundColor='purple';
      props.nph('dark')
      // alt1('dark mode enabled','sucessfully applied');
    }
  }
  const pxn3=()=>{
    if(props.vln=='dark'){
      
      document.querySelector('body').style.backgroundColor='white';
      props.nph('light')
      // alt1('light mode enabled','sucessfully applied');
    }
    else{
      props.clrn1('yellow')
      
      document.querySelector('body').style.backgroundColor='yellow';
      props.nph('dark')
      // alt1('dark mode enabled','sucessfully applied');
    }
  }


  if(props.vln=='dark'){
    
    p='light'
    pn='white'
    xp='light mode'
  }
  else{
    p='dark'
    pn='black'
    xp='dark mode'
    
  }
  return (
    
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.vln} bg-${props.vln}`}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#n">{props.sr}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">{props.paisa}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
  <div style={{color:pn}}>click  color to set background Color</div>
  <div onClick={pxn} style={{border:'2px solid black',borderRadius:'50%',height:40,marginRight:10,backgroundColor:'red',width:60}}></div>
  <div onClick={pxn1} style={{border:'2px solid black',borderRadius:'50%',height:40,marginRight:10,backgroundColor:'green',width:60}}></div>
  <div onClick={pxn2} style={{border:'2px solid black',borderRadius:'50%',height:40,marginRight:10,backgroundColor:'purple',width:60}}></div>
  <div onClick={pxn3} style={{border:'2px solid black',borderRadius:'50%',height:40,marginRight:10,backgroundColor:'yellow',width:60}}></div>  
  <div className="form-check form-switch text-light">
    <input className="form-check-input " onClick={props.darkt} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${p}`} htmlFor="flexSwitchCheckDefault" >{xp}</label>
</div>
</nav>
    </div>
  )
}
