import "./Banner.css";

const Banner = () => {
  return (
    <div className=" container jumbotron banner">
      <h1 className="display-4">Welcome to Crime Ward</h1>
      <p className="lead">
        This is a your place to report crime to all in your community.
      </p>
      <hr className="my-4" />
      <p>
        Just create a post and Crime Ward will take care of the rest making your
        neighbors aware of what's important.
      </p>
    </div>
  );
};

export default Banner;
