import React, { useState } from 'react';
import './TextForm.css'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to the uppercase","success")

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to the lowercase","success")
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text has been clear","warning")

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to the clipboard","success")

    }
    const handleExtraSpceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spce has been removed from the text","success")


    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container  d-flex  ' style={{ backgroundColor: props.mode === 'dark' ? '#052D45' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='d-flex flex-column flex-fill'>
                    <h1 className='text-center '>{props.heading}</h1>
                    <textarea align="center" className="form-control text-center mx-auto" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} placeholder="Enter your text here to convert" id="floatingTextarea" rows="10" cols="10" />
                </div>
                <div className='d-flex flex-row mx-auto'>
                    <div className='d-flex flex-column my-5'>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-5 " onClick={handleUpClick}>Convert to uppercase</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-5 " onClick={handleLowClick}>Convert to lowercase</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-5 " onClick={handleClearClick}>Clear Text</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-5 " onClick={handleCopyClick}>Copy Text</button>
                        <button disabled={text.length === 0} type="button" className="btn btn-primary my-1 mx-5 " onClick={handleExtraSpceClick}>Remove extra Space</button>
                    </div>
                </div>


            </div>
            <div className='summery container w-75' style={{ backgroundColor: props.mode === 'dark' ? '#052D45' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='text-center'>Your text summary</h2>
                <p className='text-center'>{text.split(/\s+/).length - 1} words and {text.length} Charecters</p>
                <p className='text-center'>{0.008 * text.split(/\s+/).length - 0.008} Minutes read</p>
                <h2 className='text-center'>Preview</h2>
                <p className='text-center'>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}