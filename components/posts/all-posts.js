import PostItem from "./post-item";

function AllPosts({ posts }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">All Posts</h2>
      <ul>
        {posts.map((post) => (
          // Pass post data to the PostItem component
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}

export default AllPosts;
