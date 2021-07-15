import "./Posts.css";
import PostItems from "./PostItems";

const Posts = (props) => {
  return (
    <PostItems
      title={props.items[0].title}
      author={props.items[0].author}
      date={props.items[0].date}
      location={props.items[0].location}
      content={props.items[0].content}
    />
  );
};

export default Posts;
