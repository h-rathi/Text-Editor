import PropTypes from 'prop-types';
import React ,{ useState } from 'react';
import './App2.css';
import Cmp from './Cmp';
import Cmp2 from './Cmp2';
import Alert from './Alert';
import About from './About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
function App() {

  const [alt,changeAlt]=useState();
  const alt1=( txtn,type)=>{
    changeAlt({
      msg:txtn,
      stt:type
    })
    setTimeout(() => {
      changeAlt(null)
    }, 1500);
    
  }

  



const [clrn,clrn1]=useState('')


  const [a,b]=useState('dark');
  const nph=(ntx)=>{
    b(ntx)
  }

  // document.querySelector('body').style.backgroundColor='black'
  const nhndl= ()=>{
    if(a=='dark'){
      
      document.querySelector('body').style.backgroundColor='white';
      document.querySelector('#dn1').style.backgroundColor='white';
      document.querySelector('#dn2').style.backgroundColor='white';
      clrn1('')
      
      b('light')
      alt1('light mode enabled','sucessfully applied');
      // setInterval(() => {
      //   document.title='see tools'
      // }, 2000);
      // setInterval(() => {
      //   document.title='new text tools';
      // }, 1200);
    }
    else{
      document.querySelector('body').style.backgroundColor='black';
      document.querySelector('#dn1').style.backgroundColor='black';
      document.querySelector('#dn2').style.backgroundColor='black';
      clrn1('')
      b('dark')
      alt1('dark mode enabled','sucessfully applied');
    }
  }
  return (
    <>
    {/* <Router> */}

<Cmp darkt={nhndl} vln={a} nph={nph} clrn={clrn} clrn1={clrn1} />
<Alert/>
<Cmp2 vlnhp={a} alt1={alt1}  clrn={clrn} clrn1={clrn1} />
{/* <Routes>

          <Route exact path="/" element={
              <>
                <Cmp darkt={nhndl} vln={a} nph={nph} clrn={clrn} clrn1={clrn1} />
                <Alert nf={alt} />
                <Cmp2 vlnhp={a} alt1={alt1} clrn={clrn} clrn1={clrn1} />
              </>
            }/>
          
        </Routes>
<Routes>

          <Route exact path="/About" element={
            <>
            <Cmp darkt={nhndl} vln={a} nph={nph} clrn={clrn} clrn1={clrn1} />
            <About/>

            </>
            }/>

        </Routes>
        
   </Router> */}
   </>
  );
}

Cmp.propTypes={sr:PropTypes.string,
              
}
Cmp.defaultProps={sr:'welcome',
                  paisa:32
}
Cmp2.defaultProps={title: 'enter text here'}
export default App;
