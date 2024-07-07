import React, { useState } from "react";
export default function TextForm(props) {
  const [text, settext] = useState("");

  const HandleClickupper = () => {
    let new_text = text.toUpperCase();
    settext(new_text);
    props.showalert(
      "success",
      "Your Text has been converted to upper case Successfully.."
    );
  };
  const HandleClickextra = () => {
    let new_text = text.split(/[ ]+/);
    settext(new_text.join(" "));
    props.showalert(
      "warning",
      "Extra spaces from your text has been cleaned Successfully.."
    );
  };
  const HandleClickcopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    // copyText.setSelectionRange(0 ,9999)
    navigator.clipboard.writeText(copyText.value);
    props.showalert("success", "Your Text has been copied Successfully..");
  };

  const HandleClicklower = () => {
    let new_text = text.toLowerCase();
    settext(new_text);
    props.showalert(
      "success",
      "Your Text has been converted to lower case Successfully.."
    );
  };

  const HandleClickclear = () => {
    let new_text = "";
    settext(new_text);
    props.showalert("danger", "Your Text has been removed..");
  };

  const HandleClickstatement = () => {
    if(text!==""){
    let new_text = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    settext(new_text);
    props.showalert(
      "success",
      "Your Text has been converted to Statement case Successfully.."
    );}else{
        props.showalert(
            "warning",
            "Please Enter some text to convert it..."
          );
    }
  };

  const handelonchange = (event) => {
    settext(event.target.value);
  };

  const HandleClickcamel = () => {
    function tocamel(str) {
      return str
        .split(" ")
        .map(function (word, index) {
          // If it is the first word make sure to lowercase all the chars.
          if (index === 0) {
            return word.toLowerCase();
          }
          // If it is not the first word only upper case the first char and lowercase the rest.
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
    }

    if(text!==""){
        let new_text = tocamel(text);
        settext(new_text);
        props.showalert(
          "success",
          "Your Text has been converted to Camel case Successfully.."
        );
    }else{
        props.showalert(
            "warning",
            "Please Enter some text to convert it..."
          );
    }
  };

  let ex = text.trim().split(" ").length;
  let time = ex / 125;

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.headding}
        </h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handelonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#4a5162",
              color: props.mode === "light" ? "black" : "white",
            }}
           placeholder="Enter Your Text Here"></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-2" onClick={HandleClickcopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClickupper}
        >
          Convert Text to Uppercase
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClicklower}
        >
          Convert Text to Lowercase
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClickstatement}
        >
          Convert Text to Statement
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClickcamel}
        >
          Convert Text to camel
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClickextra}
        >
          Handel Extra Spaces
        </button>
        <button
          className="btn btn-primary my-1 mx-2"
          onClick={HandleClickclear}
        >
          Clear
        </button>
      </div>
      <div
        className={`container my-1 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>This is your Text Summary</h2>
        <p>
          {text===""?"0":text.trim().split(" ").length} Words And {text.trim().length} Characters{" "}
        </p>
        <p> Required time to read the passage is {time} minutes </p>
        <h2>Preview</h2>
        <p>{text !== "" ? text : "Enter Text to preview here"}</p>
      </div>
    </>
  );
}
