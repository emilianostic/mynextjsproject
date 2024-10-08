"use client";
//RCC
function Post({ post }) {
  return (
    <div>
      <div>
        <h3>
          {post.id}. {post.title}
        </h3>
        <p>{post.body}</p>
        <button
          onClick={() => {
            alert("Hola");
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Post;
