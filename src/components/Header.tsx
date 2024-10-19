
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import { useState } from 'react';



const Header = () => {
    const [isOpen , setisOpen]=useState(false)
    function closeSidebar(){
        setisOpen(false)
        
    }
  return (
    <header className="grid grid-cols-12 w-full gap-6 ">
      <div className=" col-span-2 flex items-center justify-start">
        <img
          src="logo.png"
          alt="Logo"
          className=" max-md:h-10 object-cover h-20"
        />
      </div>
      <nav className=" flex items-center w-full  col-start-3 col-end-12 text-white">
        <Navbar />
        <Sidebar
          isOpen={isOpen}
          onClose={ closeSidebar }
        />
        <div className="flex md:hidden w-full justify-end ">
          <FontAwesomeIcon onClick={()=>{setisOpen(true)}}
            icon={faBars}
            color="white"
            size="lg"
          ></FontAwesomeIcon>
        </div>
      </nav>
    </header>
  );
}

export default Header
