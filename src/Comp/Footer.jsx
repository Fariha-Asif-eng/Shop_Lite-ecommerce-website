import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-12 w-full bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo / Brand */}
          <div>
            <Logo/>
            <p className="mt-2 text-sm">
              All you need are here, shop like your's.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-100 font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 flex gap-8">
              <li>
                <NavLink  to="/" className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}
                >Home</NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}>About</NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}>Shop</NavLink>
              </li>
              
              <li>
                <NavLink to="/login" className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}>Account</NavLink>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-zinc-100 font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-700 mt-8 pt-4 text-center text-sm text-zinc-500">
          ShopLite © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
