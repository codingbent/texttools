import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter Your Text");
    
    const handleonchange= (event)=>{
        setText(event.target.value)
    }
    const converttouppercase= ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const converttolowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const removespace =() =>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(""));
    }
    const cleartext = ()=>{
        let newtext='';
        setText(newtext);
    }
    const copytext =()=>{
        var text=document.getElementById('exampleFormControlTextarea1')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
  return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control mb-3" onChange={handleonchange} id="exampleFormControlTextarea1" rows="3" value={text}></textarea>
        <button className="btn btn-primary upper" onClick={converttouppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={converttolowercase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={cleartext}>Clear Text</button>

        <button className="btn btn-primary mx-2"  onClick={removespace}>Remove Spaces</button>
        <button className="btn btn-primary mx-2" onClick={copytext}>Copy Text</button>
        {/* <button className="btn btn-primary mx-2">Convert to Uppercase</button> */}
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>
                {text.split(' ').length} words and {text.length} characters
            </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}
