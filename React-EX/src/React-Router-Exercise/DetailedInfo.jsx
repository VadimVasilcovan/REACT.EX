import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostData } from "./Context/contextData";

export default function DetailedInfo() {
  const { fetchedData, dispatch } = usePostData();
  const { id } = useParams();

  const post = fetchedData.find((item) => item.id.toString() === id);

  useEffect(() => {
    if (!post) return;
  
    dispatch({
      type: "currentQuestion",
      payload: post,
    });
  
    dispatch({
      type: "correctAnswer",
      payload: post.correctOption,
    });
  }, [post, dispatch]);

  if (!post || !post.options) return null;

  console.log(post.options);

  return (
    <div key={id}>
      {post?.question}
      <p>Points{post?.points}</p>
      {post.options.map((option, index) => (
        <button
          key={index}
          onClick={() =>
            dispatch({ type: "yourAnswer/select", payload: index })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
