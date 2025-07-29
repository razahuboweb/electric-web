import { Facebook, Linkedin, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#04182B] text-white px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Logo & Partners */}
        <div className="md:col-span-2 space-y-6">
           <div className="flex items-center gap-6">
          <img
            src="../../public/image/nexphase1.png"
            alt="Logo"
            className="h-32 w-40"
          />
         
        </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Growth Partners</h4>
            <p className="text-sm text-gray-300">
              NEBB, ASHRAE, BSRIA, CSA, NFPA and ISO are our partners to achieve and
              maintain high performance by training, certification and the latest
              standards and procedures.
            </p>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold text-white mb-2">Menu</h4>
          <ul className="space-y-1 text-sm">
            {menuLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Saudi Arabia */}
        <div>
          <h4 className="font-semibold text-white mb-2">Saudi Arabia</h4>
          <p className="text-sm text-gray-300">
            NEXPHASE SAUDI Co. L.T.D.
            <br />
            Riyadh, KSA, CR: 1010618041
            <br />
            6321 Al Ulaya – Al Sahafa Dist. Riyadh 13321 – 3159, Sahafa Offices
            Building, 4th Floor
            <br />
            <br />
            T: +966112543739
            <br />
            info@nexphaseltd.com
          </p>
        </div>

        {/* Lebanon */}
        <div>
          <h4 className="font-semibold text-white mb-2">Lebanon</h4>
          <p className="text-sm text-gray-300">
            NEXPHASE Co. L.T.D.
            <br />
            Baabda, Lebanon, CR: 2040339
            <br />
            Branch Office: Sin El Fil, Youssef El Hayek Road, Houjeyli Center, 6th Floor
            <br />
            <br />
            T: +9613516476
            <br />
            info@nexphaseltd.com
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" className="bg-[#1DB7B2] p-2 rounded-full" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} className="text-[#04182B]" />
          </a>
          <a href="https://facebook.com" className="bg-[#1DB7B2] p-2 rounded-full" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} className="text-[#04182B]" />
          </a>
        </div>

        <div className="text-sm text-gray-300 text-center md:text-left">
          <p>Copyrights NEXPHASE LTD.</p>
          <p>2022</p>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
