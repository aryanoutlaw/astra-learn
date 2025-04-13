import { Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-background z-50 py-8 border-t-2 border-border">
      <div className="container mx-auto px-4">
        <div className="relative flex justify-center items-center">
          <div className="text-sm text-foreground">
            © {new Date().getFullYear()} Astra Learn. All rights reserved.
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            <a
              href="https://x.com/_aryan_saini_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#1DA1F2] transition-colors duration-200"
              aria-label="Follow on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryanoutlaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#0077B5] transition-colors duration-200"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}