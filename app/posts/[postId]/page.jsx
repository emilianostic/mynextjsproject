
import Post from '@/app/posts/page'
import { Suspense } from 'react';

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}


async function Page({params}) {
  console.log(params)
 const post = await loadPost(params.postId)
  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
      <hr/>
      <h1>Otras Publicaciones</h1>
      <Suspense fallback={<div>Cargando publicaciones</div>}>
      <Post/>
      </Suspense>
    </div>
  );
}

export default Page;
