import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        Crime Ward
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Posts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sign Up
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
