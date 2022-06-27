import React, {useState} from "react";

const TextForm=(props)=> {
  const [text, setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success: ");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "Success: ");

  }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear = ()=>{
      setText(" ");
      props.showAlert("Clipboard is cleared!", "Success: ");

    }
  return (
    <>
    <div className={`container mb-2 bg-${props.color}`} style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className={`text-[30px] font-bold mb-2 ${{color: props.mode === 'Dark'?'white':'Black'}}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={(e)=>handleOnChange(e)} style={{backgroundColor: props.mode ==='dark'?'rgb(39 80 112)':'white', color: props.mode ==='Dark'?'white':'black'}}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear clipboard</button>
    </div>
    <div className={`container my-3 color-${props.color === 'red'?'white':'black'}`}  style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
      <p>It took {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the above text.</p>
      <h2 className={`my-3 color-${props.color === 'red'?'white':'black'}`}>Preview</h2>
      <p className="mt-0">{text.length>0?text:"Nothing to preview.!"}</p>
    </div>
    </>
  );
}
export default TextForm