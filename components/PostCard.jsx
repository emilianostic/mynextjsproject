"use client";
import Link from 'next/link'
//RCC
function Post({ post }) {
  return (
    <div>
      <div>
        <Link href={`/posts/${post.id}`} >
        <h3>
          {post.id}. {post.title}
        </h3>
        </Link>
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
