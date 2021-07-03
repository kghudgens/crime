import "./App.css";

const Navbar = () => {
  return (
    <>
      <h1>Crime Ward</h1>
      <ul>
        <li>Home</li>
        <li>Log In</li>
        <li>Register</li>
      </ul>
    </>
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
