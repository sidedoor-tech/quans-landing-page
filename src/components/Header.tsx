
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/1a1442e2-ea71-4c86-b6e2-1fdb2382e2ad.png" 
              alt="QUANS Logo" 
              className="h-12 md:h-14" 
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            <a 
              href="#sobre" 
              className="text-quans-navy hover:text-quans-green font-medium transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-quans-navy hover:text-quans-green font-medium transition-colors"
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              className="text-quans-navy hover:text-quans-green font-medium transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-quans-navy"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#sobre" 
                className="text-quans-navy hover:text-quans-green font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                className="text-quans-navy hover:text-quans-green font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="text-quans-navy hover:text-quans-green font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
