
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex w-full gap-6 px-4  md:px-20 mt-32 justify-between pb-10">
      <div className="flex flex-col justify-center ">
        <div className="">
          <img
            src="logo.png"
            alt="Logo"
            className=" max-md:h-10 object-cover h-20"
          />
        </div>
        <div className="flex justify-center">
          <p className="text-slate-300 max-md:text-[9px] text-xs">©2024</p>
        </div>
      </div>
      <div className="flex flex-col max-md:text-xs text-white max-md:space-y-1 space-y-5 ">
        <span className="text-orangy">Contacts</span>
        <span>+7 (901) 772-0000</span>
        <span>primecoal@info.com</span>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <Link
          className="max-md:size-8"
          to="https://www.facebook.com/?locale=fr_FR"
        >
          <img src="Fb.png" alt="" />
        </Link>
        <Link
          className="max-md:size-8"
          to="https://www.instagram.com/#:~:text=Create%20an%20account%20or%20log%20in%20to%20Instagram"
        >
          <img src="Insta.png" alt="" />
        </Link>
        <Link
          className="max-md:size-8"
          to="https://web.whatsapp.com/#:~:text=Quickly%20send%20and%20receive%20WhatsApp"
        >
          <img src="tel.png" alt="" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer
