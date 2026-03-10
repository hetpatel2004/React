import React from "react"
import Intro from "./Components/Intro"
import JSXML from "./Components/JSX";
import Form from "./Components/form";
function App() {

  const employee = {
  name: "Rahul",
  role: "Frontend Developer",
  isOnline: true,
  salary: 50000,
  skills: ["HTML", "CSS", "JavaScript"],
  experience: 2
};

  return(
    <>
    {/* <Intro/> */}
    {/* <JSXML/> */}
    <Form/>
    </>
  )
}
export default App;