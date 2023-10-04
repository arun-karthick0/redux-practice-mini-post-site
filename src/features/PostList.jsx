import { useSelector } from "react-redux";
import { selectedPost } from "./PostSlice";

function PostList() {
  const post = useSelector(selectedPost);

  const posts = post.map((post) => {
    return (
      <article key={post.id} className="article">
        <h2>{post.name}</h2>
        <p>{post.message}</p>
      </article>
    );
  });

  return (
    <section>
      <h3>Post</h3>
      {posts}
    </section>
  );
}

export default PostList;
