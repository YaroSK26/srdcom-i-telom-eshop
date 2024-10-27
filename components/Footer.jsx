import { Instagram, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex space-x-4 mb-5">
          <a
            href="/our-story"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            OUR STORY
          </a>
          <span>|</span>
          <a
            href="/collection"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            COLLECTION
          </a>
          <span>|</span>
          <a
            href="/business"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            BUSINESS
          </a>
          <span>|</span>
          <a
            href="/contact"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            CONTACT US
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
            href="#"
            aria-label="Blog"
            className="hover:text-white transition-colors duration-300"
          >
            <Mail />
          </a>
        </div>
        <div className="my-8 text-xs flex gap-2">
          <a
            href="/privacy-policy"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            PRIVACY POLICY
          </a>
          <span>|</span>
          <a
            href="/terms"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            TERMS & CONDITIONS
          </a>
          <span>|</span>
          <a
            href="/refund-policy"
            className="footer-link text-muted hover:text-muted-foreground"
          >
            RETURN & REFUND POLICY
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;