import React from "react"
import Intro from "./Components/Intro"
import JSXML from "./Components/JSX";
import Form from "./Components/Form";
import Form_task from "./Components/Form_task";
import Components from "./Components/task_component/components";
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
    {/* <Form/> */}
    {/* <Form_task/> */}
    <Components/>
    </>
  )
}
export default App;