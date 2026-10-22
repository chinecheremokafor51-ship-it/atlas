import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <header className="relative z-10 flex gap-10 items-center justify-between px-10 py-4 ">
            <h5 className="text-white text-4xl font-bold">ATLAS</h5>

            {/* Original navigation: visible on tablet and desktop */}
            <nav className="hidden md:flex gap-4 text-white lg:text-xl md:text-normal">
              <Link to='/'>Home</Link>
              <Link to='/communities'>Communities</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/contact'>Contact</Link>
            </nav>

            {/* Original Contact Us button: visible on tablet and desktop */}
            <Link
              to='/contact'
            
              className="hidden md:block bg-orange-600 px-4 py-1 text-white rounded-sm"
            >
              Contact Us
            </Link>

            {/* Hamburger: visible only on mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <span className="text-4xl leading-7">&times;</span>
              ) : (
                <>
                  <span className="block w-7 h-0.5 bg-white"></span>
                  <span className="block w-7 h-0.5 bg-white"></span>
                  <span className="block w-7 h-0.5 bg-white"></span>
                </>
              )}
            </button>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
              <nav className="absolute top-full left-0 w-full bg-slate-900 p-5 flex flex-col gap-5 text-white shadow-xl md:hidden z-50">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/communities" onClick={() => setIsMenuOpen(false)}>
                  Communities
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-orange-600 px-4 py-2 text-white rounded-sm text-center"
                >
                  Contact Us
                </Link>
              </nav>
            )}
          </header>
  );
}

export default Header;