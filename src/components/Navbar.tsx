import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Cybersecurity', href: '#cybersecurity' },
    { name: 'AI & ML', href: '#ai-ml' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="brand-logo" aria-label="Getaneh Dejenie Home">
          <Terminal size={20} className="text-hot-green" />
          <span>
            <span className="brand-bracket">&lt;</span>
            GD
            <span className="brand-bracket"> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {navItems.map(item => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`nav-anchor ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm"
            style={{ display: 'none', md: 'inline-flex' } as any}
          >
            <span>Resume</span>
            <ExternalLink size={14} />
          </button>

          <a href="#contact" className="btn btn-primary btn-sm">
            Connect
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            background: 'rgba(13, 26, 18, 0.98)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '2rem 1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            zIndex: 999
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {navItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                View / Download Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

