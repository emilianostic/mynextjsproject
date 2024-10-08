import PostCard from '../../components/PostCard'
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
//RSC
async function PostPages() {//el asyn da l apauta que es un componente del lado del servidor
  const posts = await loadPosts();
  console.log(posts)
  return (
  
      <div>
        {posts.map((post) =>(
          <PostCard post={post} key={post.id} />
        ))}
        

      
      </div>
   
   
  );
}

export default PostPages;
