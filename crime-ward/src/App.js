import "./App.css";

const Navbar = () => {
  return (
    <div className="container">
      <h1 className="title">Crime Ward</h1>
      <ul className="menu navigation-bar">
        <li>Home</li>
        <li>Log In</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

const Main = () => {
  return <h1>Posts</h1>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
