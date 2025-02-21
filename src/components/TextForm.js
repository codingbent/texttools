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
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","Success");
    }
  return (
    <>
    <div className='container'>
        <h1 style={{Color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control mb-3" onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
        <button disabled={text.length===0} className="btn btn-primary upper" onClick={converttouppercase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={converttolowercase}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={cleartext}>Clear Text</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={removespace}>Remove Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copytext}>Copy Text</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>
                {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
</div>
    </>
  )
}
