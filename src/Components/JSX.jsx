function JSXML() {
  const employee = {
    name: "Rahul",
    role: "Frontend Developer",
    isOnline: true,
    salary: 50000,
    skills: ["HTML", "CSS", "JavaScript"],
    skills2:[],
    experience: 2,
  };
  function post() {
    if (employee.experience <= 3) {
      return "Junior Developer";
    } else {
      return "Senior Developer";
    }
  }
  function skills() {
    return employee.skills.map((anyname, index) => {
      return <li key={index}>{anyname}</li>;
    });
  }
  function fons_style() {
        return(
            <h3 style={{color: employee.isOnline ?"Green":"Red"}}>
                {employee.isOnline?"online":"ofline"}
            </h3>
        );
  }

  function and_operator() {
        return(employee.skills2.length === 0 && <p>No Skills Available</p>)
  }
  return (
    <>
      <h1>Employee Profile</h1>
      <h3>name:- {employee.name}</h3>
      <h3>EMP_Role:- {employee.role}</h3>
      <h3>Online_status:- {employee.isOnline ? "true" : "false"}</h3>
      <h3>Year:- {new Date().getFullYear()}</h3>
      <h3>Salary:- {employee.salary}</h3>
      <h3>Experience:- {employee.experience}years</h3>
      <h3>Post:- {post()}</h3>
      <h3>Skils:- {skills()}</h3>
      <button>Contact Employee</button>
      <br />
      <img src="./assest/image/car.jpeg" alt="car img" />
      <h3>{fons_style()}</h3>
      <h3>Total number of skils:-{employee.skills.length}</h3>
      <h3>{and_operator()}</h3>
    </>
  );
}
export default JSXML;
