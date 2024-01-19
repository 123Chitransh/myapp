import React from 'react'
import { useState } from 'react';



export default function Textform(props) {

    const [text, setText] = useState('');

    const handleOnchange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Succesfully Converted to UpperCase ! ")
    }

    const handleloClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Succesfully Converted to LowerCase ! ")

    }
    const clearText = () => {
        console.log("lowercase was clicked");
        let newText = "";
        setText(newText)
        props.showAlert("Succesfully Cleared the Text ! ")

    }

    return (
        <div className='container my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} ></textarea>
            </div>
            <button disabled={text.length===0}  type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={clearText}>Clear the Text</button>

            <div className="container my-4">
                <h4>
                    {text.split(/\s+/).filter((element)=>{
                         return element.length!==0
                    }).length} words and {text.length} characters
                </h4>
            </div>

        </div>
    )
}
