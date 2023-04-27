import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle , setmyStyle] = useState({
    
    //     color: 'black',
    //     backgroundColor: 'white'
    // })  

    let myStyle = {
        color: props.mode === 'dark'?'white':'#808080',
        backgroundColor: props.mode ==='dark'?'#808080':'white',
        
    }


  return (
            <div className="container" style={{color: props.mode === 'dark'?'white':'#808080'}}>
                <h2 className="my-3">About Us</h2>
                    <div className="accordion" id="accordionExample" style={myStyle} >
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Analzye Your text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives youthe way to analyze your text effectively .
                        It changes the text into different domain as avaiable.
                        It summerizes number of words , characters and even gives the preview or history.
                    </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <strong>Free to use</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free website which provides instant character count and word count .
                        TextUtils reports the number words or character being used .
                    </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong>Browser Compatible</strong> 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This software works on any web Browser such as chrome,Firefox,Explorer Opera, etc. 
                    </div>
                    </div>
                 </div>
             </div>
             
        </div>
  )
}
