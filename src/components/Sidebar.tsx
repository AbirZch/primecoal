import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react';

import { Link } from 'react-router-dom'
 interface SidebarProps {
   isOpen: boolean;
   onClose: () => void;
 }
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-black     transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={faClose} size={"2xl"} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Menu</h2>
        <ul className="space-y-2">
          <Link
            to={"/"}
            className="block py-2 px-4 text-white hover:bg-gray-100  hover:text-black rounded"
          >
            Home
          </Link>
          <Link
            to={"/news"}
            className="block py-2 px-4 text-white hover:bg-gray-100  hover:text-black rounded"
          >
            News
          </Link>
          <Link
            to={"/become-distributor"}
            className="block py-2 px-4 text-white hover:bg-gray-100  hover:text-black rounded"
          >
            Become a Distributor
          </Link>
          <Link
            to={"/about-us"}
            className="block py-2 px-4 text-white hover:bg-gray-100  hover:text-black rounded"
          >
            About Us
          </Link>
          <Link
            to={"mailto:primecoal@info.com"}
            className="block py-2 px-4 text-white hover:bg-gray-100  hover:text-black rounded"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar


