import React, { useState } from "react";

function Form_task() {
  const [name, setname] = useState("");
  const [email,setemail]= useState("")
  function add() {
    // setname(...name)
    console.log("hallo");
  }
  function submit() {
    if (name === "") {
        alert("Enter name is mendetory ")
    }
  }
  return (
    <>
      {/* Create an input field controlled by React state and display its value below. */}
      <form action="#" onSubmit={submit}>

      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        />
      <br/>
      <span>{name}</span><br />
      <input type="emali" 
      placeholder="Email "
      value={email}
      onChange={(e)=>setemail(e.target.value)}/>
      <br />
      <span>{email}</span>
      <br />

    <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form_task;
