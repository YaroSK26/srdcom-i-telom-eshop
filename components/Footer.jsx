import { Instagram, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-muted-foreground py-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex space-x-4 mb-5">
          <a
            href="/"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            DOMOV
          </a>
          <span>|</span>
          <a
            href="/galeria"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            GALÉRIA
          </a>
          <span>|</span>

          <a
            href="/kontakt"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            KONTAKT
          </a>
        </nav>
        <div className="flex space-x-4 gap-2 mt-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-300"
          >
            <Instagram />
          </a>
          <a
            href="/kontakt"
            aria-label="Blog"
            className="hover:text-white transition-colors duration-300"
          >
            <Mail />
          </a>
        </div>
        <div className="mt-5 text-lg flex flex-col gap-2">
          <div className="flex gap-2 justify-center">
            <p href="/privacy-policy" className=" text-muted">
              Stránku vytvoril
            </p>
            <span>|</span>
            <a
              href="https://jaroslav.website"
              target="_blank"
              className="footer-link text-muted hover:text-muted-foreground"
            >
              Jaroslav
            </a>
          </div>
          <p> &copy; {currentYear} Všetky práva vyhradené </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;