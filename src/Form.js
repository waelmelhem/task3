import React from "react";

function Form() {
    let [personName,setPersonName]=React.useState("");
    let current;
    let [btn,setbtn]=React.useState(false);
    function onInputChange(e){
        setPersonName(e.target.value);
    }
    function onBtnClick(){
        setbtn(true);
        // current=personName
        // setPersonName("")
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <label htmlFor="#inp">Your Name</label>
                <input onChange={onInputChange} value={personName} id="inp"></input>
                <br/>
                {btn?<div>Hay {personName} keep going </div>:<div>hi {personName} How are You</div>}
                <br/>
                <button onClick={onBtnClick}>Motivate</button>
            </form>
        </div>
    )
}
export default Form;