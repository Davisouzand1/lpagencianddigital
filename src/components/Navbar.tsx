import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Início", href: isHome ? "#inicio" : "/#inicio" },
    { label: "Serviços", href: isHome ? "#servicos" : "/#servicos" },
    { label: "Resultados", href: isHome ? "#resultados" : "/#resultados" },
    { label: "Blog", href: "/blog" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="ND Digital" className="h-8 md:h-10 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.href === "/blog" ? (
                <Link
                  key={item.label}
                  to="/blog"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (isHome && item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="http://wa.me/62994484199"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-up" style={{ animationDuration: "0.3s" }}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.href === "/blog" ? (
                  <Link
                    key={item.label}
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-2 py-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (isHome && item.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-2 py-1"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="http://wa.me/62994484199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
