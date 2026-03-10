
// Component for HelloReact
function HelloReact() {
  return <p>Hello, React World!</p>;
}

function Header() {
  return <h2>My Simple Website</h2>;
}

/* Content Component with Dynamic Data */
function Content() {
  const name = "Het Patel";
  const role = "React Student";

  return (
    <div>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}

/* Footer Component */
function Footer() {
  return <p>© 2026 My Website</p>;
}

/* Reusable Card Component */
function Card(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      {props.text}
    </div>
  );
}

/* Component showing JSX layout */
function JSXExample() {
  return (
    <div>
      <h4>JSX Layout Example</h4>
      <p>This layout is written using JSX inside React.</p>
    </div>
  );
}

/* Single Root Element Example */
function RootExample() {
  return (
    <>
      <p>This component uses a single root wrapper.</p>
      <p>React requires components to return one root element.</p>
    </>
  );
}

/* Static UI Converted to Components */
function StaticHeader() {
  return <h2>Static Page Header</h2>;
}

function StaticContent() {
  return <p>This was originally static HTML but is now a React component.</p>;
}

function StaticFooter() {
  return <p>Static Page Footer</p>;
}

/* Profile Card Components (Mini Industry Simulation) */

function ProfileImage() {
  return (
    <img
      src="data:image/jpeg;base64,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"
      alt="profile"
      style={{ borderRadius: "50%" }}
    />
  );
}

function ProfileInfo() {
  return (
    <div>
      <h4>Het Patel</h4>
      <p>Cybersecurity Student</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <ProfileImage />
      <ProfileInfo />
    </div>
  );
}

function Intro() {
  return (
    <div>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>

        <h3>Understand React’s Purpose</h3>
        <p>
          React is a JavaScript library used to build user interfaces for web
          applications. It helps developers create fast and interactive websites.
          React uses reusable components and a Virtual DOM which updates only
          the changed part of the page instead of reloading the whole page.
        </p>

        <h3>Create Your First React App</h3>
        <p>
          Use Vite to create a React project. Run: <b>npm create vite@latest my-react-app</b>,
          then <b>cd my-react-app</b>, <b>npm install</b>, and <b>npm run dev</b>.
        </p>

        <h3>Explore Project Structure</h3>

        <h4>src folder</h4>
        <p>This folder contains main React code and components.</p>

        <h4>public folder</h4>
        <p>This folder contains static files like images and icons.</p>

        <h4>index.html</h4>
        <p>Main HTML file where the React app loads.</p>

        <h4>App.js</h4>
        <p>Main component where the UI is written.</p>

        <h3>Modify the Default UI</h3>
        <h2>Welcome to My First React App</h2>

        <h3>Create Your First Component</h3>
        <HelloReact />

      </div>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>

        <h1>React Intermediate Assignment</h1>

        <h3>Break UI into Components</h3>
        <Header />
        <Content />
        <Footer />

        <h3>Understand JSX</h3>
        <JSXExample />

        <h3>Dynamic Content with JavaScript</h3>
        <Content />

        <h3>Reuse Components</h3>
        <Card text="First Card Component" />
        <Card text="Second Card Component" />
        <Card text="Third Card Component" />

        <h3>Virtual DOM Observation</h3>
        <p>
          React uses Virtual DOM which updates only changed elements instead
          of reloading the full page.
        </p>

        <h3>Styling a Component</h3>
        <Card text="Styled card example." />

        <h3>Component File Organization</h3>
        <p>
          In real projects components are stored inside a "components" folder
          for better organization.
        </p>

        <h3>Single Root Element Practice</h3>
        <RootExample />

      </div>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>

        <h1>Advanced / Industry Level Tasks</h1>

        <h3>Convert Static UI to Component-Based UI</h3>
        <p>
          A static HTML page can be divided into reusable components like
          Header, Content, and Footer.
        </p>

        <StaticHeader />
        <StaticContent />
        <StaticFooter />

        <h3>Component Naming Standards</h3>
        <p>
          Components should use PascalCase naming like ProfileCard, Header,
          or UserCard instead of names like test or abc.
        </p>

        <h3>Remove Direct DOM Manipulation</h3>
        <p>
          In React we avoid using methods like document.getElementById.
          Instead React updates the UI automatically using state and props.
        </p>

        <h3>Project Readability Task</h3>
        <p>
          Code readability improves by using proper indentation, meaningful
          component names, and clean JSX structure.
        </p>

        <h3>Explain React to a Non-Developer</h3>
        <p>
          React is a tool developers use to build modern and interactive
          websites. It allows pages to update quickly without refreshing the
          whole page, making the user experience faster and smoother.
        </p>

        <h3>Mini Industry Simulation – Profile Card</h3>
        <ProfileCard />

      </div>

    </div>
  );
}

export default Intro;