import "./App.css";
import Posts from "./components/Content/Posts";
import Navbar from "./components/UI/Navbar";
import Banner from "./components/UI/Banner";

function App(props) {
  const postList = [
    {
      title: "Murder",
      author: "kevinhudgens",
      date: new Date(2021, 7, 11).toISOString(),
      location: "South Carolina",
      content: "There was a killing in south carolina ",
    },
    {
      title: "Robbery",
      author: "Momo",
      date: new Date().toISOString(),
      location: "New York",
      content: "There was a Robbery in new york",
    },
  ];

  return (
    <div>
      <Navbar />;{/* Pass in the list to the post component */}
      <Banner />;
      <Posts items={postList} />;
    </div>
  );
}

export default App;
