import Link from 'next/link';
import Logo from './logo';

function MainNavigation() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>

      <nav>
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li>
          <Link href="/posts" className="hover:text-blue-500 transition-colors">
             Posts
            </Link>

          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
