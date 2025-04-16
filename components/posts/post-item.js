import Image from "next/image";
import Link from "next/link";

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;
  const imagePath = `/images/posts/${image}`;

  return (
    <li className="mb-6 border-b pb-4">
      <Link href={`/posts/${slug}`}>
     
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <time className="text-sm text-gray-500">{date}</time>
            <p className="mt-2 text-gray-700">{excerpt}</p>
          </div>
       
      </Link>
    </li>
  );
}

export default PostItem;