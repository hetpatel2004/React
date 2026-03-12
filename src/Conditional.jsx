import React, { useState } from "react";

function Conditional() {
  // const login = true;
  // const [name,setname]= useState(false)
  // const loding = true
  // const arr = []
  // function array() {
  //   if(arr.length == 0){
  //     return "array is empty"
  //   }
  //   else{
  //     return arr
  //   }
  // }
  // const [show,setshow] = useState(false)
  // const isAdmin = true;
  // const [form,setForm] = useState("")
  // const isLoggedIn = true;
  // const isPremium = true;

  // function abc() {
  //     if (isLoggedIn , isPremium === true) {
  //         return "Premium Content"

  //     } else {
  //         return "Login and Buy Premium"
  //     }
  // }

  // const profileimage = false;

  // function image() {
  //     if (profileimage == true) {
  //         return "Profile Image"
  //     } else {
  //         return "Default avatar"
  //     }
  // }

  // const [active,setActive]= useState(null)
  return (
    <>
      {/* <h1>{login ? "Welcome User":"Please Login"}</h1> */}

      {/* <button onClick={()=>setshow(!show)}>
        {show ? "Hide Text" : "Show Text"}
    </button>
    {show && <p>het</p>} */}

      {/* <h2>{isAdmin ?"Admin Access":null}</h2> */}

      {/* <button onClick={()=>setname(!name)}>
      {name ? "login":"logout"}
    </button> */}

      {/* {loding ?"loding...":"hello react"} */}

      {/* Display “No Items Found” if array is empty; otherwise render list. */}
      {/*     
    <h1>{array()}</h1> */}

            {/* <form action="#">
                <label htmlFor="username">UserName</label>
                <input type="text" value={form} onChange={(e)=>setForm(e.target.value)}/>
                {form && <button>Submit</button>}
            </form> */}


     {/* <p>{abc()}</p> */}



     {/* <p>{image()}</p> */}



     {/* <button className={active ? "Active":"UnActive"} onClick={()=>setActive(!active)}>
                Click
            </button> */}
    </>
  );
}
export default Conditional;
