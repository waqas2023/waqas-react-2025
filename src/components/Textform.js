import React,{useState} from 'react';





export default function Textform(props) {
    
    // setText("Hello");
    // text = "new" // wrong way to set value
    
    // const handleClick = () => {
    //     setText("New");
    // };
  
    const [text, setText] = useState("");
    const handleUpClick = () => {
        debugger;
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("success","Upper case done")
        // console.log(text)success
    } 
    const handleLowClick = () => {
        let upText = text.toLowerCase();
        setText(upText);
        props.showAlert("success","Lower case done")
        // console.log(text)
    } 
    const handleChange = (e) => {
        setText(e.target.value);
    } 
    const clearText = () => {
        setText('');
    } 
    const copyText = () => {
        debugger;  
       var text2 = document.getElementById("myBox");
       text2.select();
       navigator.clipboard.writeText(text2.value);
    } 
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success","Extra spaces removed")
    } 
  return (
    <>  
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <form>
                    <h4>{props.heading}</h4>
                    <div className="form-group">
                        {/* <label for="myBox"></label> */}
                        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#010520',color: props.mode==='dark'?'white':'black' }}></textarea>
                    </div>
                </form> 
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Lower Case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear</button>
                <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="continer mx-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Your Text summary is below:</h3>
                <p><span className="text-danger fw-bold">{text.split(" ").length-1}</span> words and <span className="text-danger">{text.length}</span> charcters</p>
                <p>You can Read in about <span className="text-danger fw-bold">{text.length>0?0.008*text.split(" ").length:"0"}</span> Minutes. </p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Your text"}</p>
            </div>
        </>   
  )
}
