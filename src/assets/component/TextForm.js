import React, {useState,useEffect}from 'react'

function TextForm(props) {
  const [text, setText] = useState('Enter the text');
    const handleUpClick=()=>{
        // console.log("Upercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked" + text);
        let newText =text.toLowerCase();
        setText(newText)
    }
    const handleclearClick=()=>{
      
      let newText ="";
      setText(newText)
  }
  

    const handleOnChange=(event)=>{
        // console.log("On change");
         setText (event.target.value);
    }


  
    
  return( 
    <>
    <div className='container'>
        <h1 className='my-5 mx-5 text-pink-600'>{props.heading} </h1>
        
       <div className='mb-3  mx-8'>
        <textarea className= ' w-[600px] form-control pl-3 pt-4' value={text} onChange={handleOnChange} id='exampleFormControlTextarea1' rows="8"></textarea>
      </div>
      <button className='border font-bold ml-5 bg-green-600 rounded-lg text-white py-4' onClick={handleUpClick}> Change To Uppercase</button>
      <button className='border font-bold ml-5 bg-green-600 text-white  rounded-lg py-4' onClick={handleLoClick}> Change To Lowercase</button>
      <button className='border font-bold ml-5 bg-green-600 rounded-lg text-white py-4' onClick={handleclearClick}> Clear Text</button>
    
    <div className='container ml-5 my-5'>
    <h1 className='font-bold text-red-500'> YOUR TEXT SUMMARY</h1>
    <p className='text-red-400'> {text.split(" ").length} words  and {text.length} character</p>
    <p className='text-green-400'>{0.008*text.split(" ").length} minute read</p>
    <h2 className='font-bold text-pink-500'>PREVIEW</h2>
    <p className='border-separate border-spacing-2 border border-slate-400 px-3 py-4 w-[600px]'>{text}</p>
    </div>
    </div>
    </>
  ); 
  }   
  



export default TextForm;
