
import React ,{useState} from 'react'

export default function Cmp2(props) {
  
    const hndl= ()=>{
        two(one.toUpperCase())
        props.alt1('converted to upper case','successfully applied: ')
    }
    
    const hndl1= (event)=>{
        two(event.target.value)
        txtUp('preview')
    }
    const hndl2= (event)=>{
      two(one.toLowerCase())
      props.alt1('converted to lower case','successfully applied: ')
    }
    const hndl3= (event)=>{
    two("")
    props.alt1('text cleared','success')
    }
    const hndl4= (event)=>{
      let x=one.split('.');
      let y="";
      for (let i=0;i<x.length-1;i++){
        
        let p=(x[i][0]).toUpperCase()+x[i].slice(1,x[i].length)
        y=y+p+'.'
        
      }
      two(y)
      props.alt1('capitalized sentence','successfully applied: ')
      }
      


      let xyz1='';
      
      let xyz='';
      
     
      
      
      if (props.vlnhp=='dark'){
        
        if (props.clrn=='red'){
          xyz1='red'
          xyz='white'
        }
        else if (props.clrn=='yellow'){
          xyz1='yellow'
          xyz='white'
        }
        else if (props.clrn=='purple'){
          xyz1='purple'
          xyz='white'
        }
        else if (props.clrn=='green'){
          xyz1='green'
          xyz='white'
        }
      
        else{
          xyz1='black'
          xyz='white'
        }
        
        
      }
      else{
        xyz1='white'
        xyz='black'
      }
      
      let obj1={
        backgroundColor:xyz1,
        color:xyz
      };
      


      

       

    const [one,two]=useState('');
      
    // const [inst,outa]=useState('dark mode');
    const [txt,txtUp]=useState('please enter your text to preview')
    let ab='';
    if (one==''){
      ab=true;
    }
    else{
      ab=false
    }
        
  return (
    <div id='dn2' style={obj1}>
        <h2 style={{ marginLeft:300, marginTop:20}}>welcome , enter text below  </h2>
        
        <div id='dn1' style={obj1}>
  <div className="mb-3" style={{marginTop:50, textAlign:'center'}}>
    
    <input id='ok' type="text" value={one} onChange={hndl1} style={{width: 800, marginLeft:300,height:100,backgroundColor:xyz1,color:xyz}} className="form-control"  aria-describedby="emailHelp"/>

  </div>
  <div style={{display:'flex',justifyContent:'center' }}>
  <button  disabled={ab} onClick={hndl} className="btn btn-primary" >convert to upper case</button>
  <button  disabled={ab} onClick={hndl2} className="btn btn-primary" style={{ marginLeft:20}} >convert to lower case</button>
  <button  disabled={ab} onClick={hndl3} className="btn btn-primary" style={{ marginLeft:20}}>clear text</button>
  <button  disabled={ab} onClick={hndl4} className="btn btn-primary" style={{ marginLeft:20}}>capitalize sentence</button>
  {/* <button  onClick={hndl5} className="btn btn-primary" style={{ marginLeft:20}}>{inst}</button> */}
  </div>
  </div>
  <h2 style={{ marginLeft:300}}>your text summary- </h2>
  <p style={{ marginLeft:300}}>{one.split(' ').length-1+'  '}words and {one.length} characters</p>
  <p style={{ marginLeft:300}}>reading time : {0.008*one.split(' ').length} minutes</p>
  <h2 id='id1' style={{ marginLeft:300}}>{txt} </h2>
  <p style={{ marginLeft:300, width:900}}> {one} </p>
  
    </div>
  )
}

