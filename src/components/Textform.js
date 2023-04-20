import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked" + text); 
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text); 
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase", "success");
    }
    const handleExtraStaces = ()=>{ 
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
    }
    const handleClear = ()=>{ 
      let newText = '';
      setText(newText)
   }

    
    const handleOnchange = (event)=>{
       // console.log("On change"); 
        setText(event.target.value);
     }
    const [text,setText] = useState('');
    // correct way to change the state
    // setText("new text")
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraStaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summay</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter to preview it here"}</p>

    </div>
    </>
  )
}
