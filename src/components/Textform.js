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
        <h1 className='mb-2' >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} 
        onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#5a5a5a':'white',
        color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraStaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
        
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summay</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
