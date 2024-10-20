import { Instagram, Mail } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-background text-muted-foreground py-6">
      <div class="container mx-auto flex flex-col items-center">
        <nav class="flex space-x-4 mb-5">
          <a href="/our-story" class="hover:text-primary">
            OUR STORY
          </a>
          <span>|</span>
          <a href="/collection" class="hover:text-primary">
            COLLECTION
          </a>
          <span>|</span>
          <a href="/business" class="hover:text-primary">
            BUSINESS
          </a>
          <span>|</span>
          <a href="/contact" class="hover:text-primary">
            CONTACT US
          </a>
        </nav>
        <div class="flex space-x-4 gap-2 mt-4">
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="Blog">
            <Mail />
          </a>
       
        </div>
        <div class="my-8 text-xs flex gap-2">
          <a href="/privacy-policy" class="hover:text-primary">
            PRIVACY POLICY
          </a>
          <span>|</span>
          <a href="/terms" class="hover:text-primary">
            TERMS & CONDITIONS
          </a>
          <span>|</span>
          <a href="/refund-policy" class="hover:text-primary">
            RETURN & REFUND POLICY
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
