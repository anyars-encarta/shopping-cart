import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    {/* <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto"> */}
    <nav className='flex items-center justify-between pl-10 pr-10 mx-auto fixed top-0  w-full   bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10'>
      <Link to="/">
        <div className="ml-5">
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md: text-3xl cursor-pointer tracking-wide">
            SHOPPING CART
          </h1>
        </div>
      </Link>

      <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>

        <Link to="/cart">
          <li className="cursor-pointer">Cart</li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Header;
