import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import PortfolioPage from './components/PortfolioPage';
import { ModeToggle } from './components/mode-toggle';
import { Toaster } from './components/ui/toaster';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">A</div>
              <h1 className="text-xl font-semibold">auge2u Portfolio</h1>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/auge2u" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                GitHub Profile
              </a>
              <ModeToggle />
            </div>
          </div>
        </header>
        
        <main>
          <PortfolioPage />
        </main>
        
        <footer className="border-t py-6 mt-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} auge2u. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;