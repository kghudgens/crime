import "./PostItems.css";

const PostItems = (props) => {
  return (
    <div>
      <h2>{props.title} </h2>
      <h3>{props.author}</h3>
      <h3>{props.date}</h3>
      <h3>{props.location}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default PostItems;
