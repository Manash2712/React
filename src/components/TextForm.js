import React, {useState} from 'react'

//useState is a hook
export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log('upper case was clicked!');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () => {
        //console.log('upper case was clicked!');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange = (event) => {
        //console.log('On Change');
        setText(event.target.value);  // using this onChange event we will be able to change the text of that text area and update it too!
    }

    const clear = () => {
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const [text, setText] = useState(''); //state in react, react automatically keep track of the state variables and state variables can not be changed like normal variables we need to change those using function like here we have used setText
  return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#060543'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>        
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.trim()===""?0:text.trim().replace(/\n/g," ").split(" ").filter(value => value !== "").length} Words, {text.trim().replace(/\n/g," ").split("").filter(value => value !== " ").length} characters</p>
            <p>{text.trim()===""?0:text.trim().replace(/\n/g," ").split(" ").filter(value => value !== "").length * 0.008} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.trim().replace(/\n/g," ").split("").filter(value => value !== " ").length>0 ? text: "Enter something above to preview"}</p>
        </div>
      </>
    
    
  )
}
