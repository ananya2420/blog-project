import AllPosts from "./all-posts";  // Assuming "all-posts" renders a list of posts

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with Next.js",
    image: "getting-started-with-nextjs.png",
    excerpt: "Next.js is the React framework for production. It makes building fullstack React apps a breeze.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Next.js Part 2",
    image: "getting-started-with-nextjs.png",
    excerpt: "Learn about routing and components.",
    date: "2022-02-11",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Next.js Part 3",
    image: "getting-started-with-nextjs.png",
    excerpt: "Working with images and more.",
    date: "2022-02-12",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Next.js Part 4",
    image: "getting-started-with-nextjs.png",
    excerpt: "Final advanced features.",
    date: "2022-02-13",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
