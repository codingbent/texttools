import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter Your Text");

    const handleonchange= (event)=>{
        setText(event.target.value)
    }
    const converttouppercase= ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To Uppercase","Success");
    }
    const converttolowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To Lowercase","Success");
    }
    const removespace =() =>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(""));
    }
    const cleartext = ()=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text Cleared","Success");
    }
    const copytext =()=>{
        var text=document.getElementById('exampleFormControlTextarea1')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
  return (
    <>
    <div className='container'>
        <h1 style={{Color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control mb-3" onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="3" value={text}></textarea>
        <button className="btn btn-primary upper" onClick={converttouppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={converttolowercase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1"  onClick={cleartext}>Clear Text</button>

        <button className="btn btn-primary mx-2 my-1"  onClick={removespace}>Remove Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={copytext}>Copy Text</button>
        {/* <button className="btn btn-primary mx-2">Convert to Uppercase</button> */}
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>
                {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in textbox to preview it"}</p>
        </div>
</div>
    </>
  )
}
