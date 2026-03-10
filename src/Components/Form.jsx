import { useState } from "react";

function Form() {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [error ,seterror] =useState({});
    function submit(e) {
        e.preventDefault();
       let errorcatch = {}
        
       if (name === "") {
        errorcatch.name = "Name is mandatory"
    }
    if (email === ""){
        errorcatch.email = "Email is mandatory "
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ){
        errorcatch.email = "enter correct Email "
        // <p style={{color:"red"}}>{errorcatch.email}</p>
       }
       if (password === ""){
        errorcatch.password = "password is mandatory "
        // <p style={{color:"red"}}>{errorcatch.password}</p>
       }else if ( password.length < 6){
           errorcatch.password = "enter correct password "
        }
         seterror(errorcatch)
        if (Object.key
            
        ) {
            alert("Form submited")
        } 
    }
    return(
        <div>
            <form action="#" onSubmit={submit}>
                <label htmlFor="text">UserName:-</label>
                <input type="text" placeholder="Uername" value={name} onChange={(e)=>{setname(e.target.value)}}/><br></br>
                {error.name && <p style={{color:"red"}}>{error.name}</p>}
                <label htmlFor="email">email:-</label>
                <input type="email" placeholder="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br></br>
                {error.email && <p style={{color:"red"}}>{error.email}</p>}
            {/* <p style={{color:"red"}}>{errorcatch.email}</p> */}
                <label htmlFor="password">Password:-</label>
                <input type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br></br>
                {error.password && <p style={{color:"red"}}>{error.password}</p>}
            {/* <p style={{color:"red"}}>{errorcatch.password}</p> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;