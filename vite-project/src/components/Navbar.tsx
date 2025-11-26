import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/aragencylogo.png";

const linkStyle: React.CSSProperties = {
  color: "#111827",
  textDecoration: "none",
  padding: "0.5rem 0.75rem",
  borderRadius: 6,
  fontWeight: 500,
  cursor: "pointer",
  position: "relative",
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  background: "#efefef",
};

const navStyle: React.CSSProperties = {
  borderBottom: "1px solid #e5e7eb",
  background: "#fff",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const brandStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontWeight: 700,
  fontSize: "1.125rem",
};

const linksWrapStyle: React.CSSProperties = {
  display: "flex",
  gap: "0.25rem",
  alignItems: "center",
};

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: "0.25rem",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 6,
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  minWidth: 180,
  zIndex: 1000,
  padding: "0.5rem 0",
};

const dropdownItemStyle: React.CSSProperties = {
  color: "#111827",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  display: "block",
  fontWeight: 400,
  fontSize: "0.9rem",
  transition: "background 0.2s",
};

const mobileMenuStyle = (isOpen: boolean): React.CSSProperties => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  borderBottom: "1px solid #e5e7eb",
  display: isOpen ? "flex" : "none",
  flexDirection: "column",
  padding: "1rem",
  gap: "0.5rem",
  zIndex: 999,
});

const hamburgerStyle: React.CSSProperties = {
  display: "none",
  flexDirection: "column",
  gap: "4px",
  cursor: "pointer",
  padding: "0.5rem",
};

const hamburgerLineStyle: React.CSSProperties = {
  width: "24px",
  height: "3px",
  background: "#111827",
  borderRadius: "2px",
  transition: "all 0.3s",
};

const mobileDropdownStyle: React.CSSProperties = {
  paddingLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  marginTop: "0.25rem",
};

const Navbar: React.FC = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileDownloadOpen, setMobileDownloadOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-links {
              display: none !important;
            }
            .hamburger-menu {
              display: flex !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
      <nav style={{ ...navStyle, position: "relative" }} aria-label="Main navigation">
        <div style={containerStyle}>
          <div style={brandStyle}>
            <NavLink to="/" style={{ ...linkStyle, padding: 0, display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Aragencies Logo"
                style={{ height: 64, width: 160, objectFit: "contain" }}
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div style={linksWrapStyle} className="desktop-links">
            <NavLink to="/" end style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}>
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <NavLink 
                to="/aboutus" 
                style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}
              >
                About Us ▾
              </NavLink>
              {aboutDropdown && (
                <div style={dropdownStyle}>
                  <NavLink 
                    to="/aboutus" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    About Us
                  </NavLink>
                  <NavLink 
                    to="/aboutus/vision-mission" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Vision & Mission
                  </NavLink>
                  <NavLink 
                    to="/aboutus/team" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Team
                  </NavLink>
                </div>
              )}
            </div>

            {/* Our Products Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <NavLink 
                to="/ourproducts" 
                style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}
              >
                Our Products ▾
              </NavLink>
              {productsDropdown && (
                <div style={dropdownStyle}>
                  <NavLink 
                    to="/ourproducts/getinge" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Getinge
                  </NavLink>
                  <NavLink 
                    to="/ourproducts/nihon-koden" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Nihon Koden
                  </NavLink>
                  <NavLink 
                    to="/ourproducts/kls-martin" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    KLS MARTIN
                  </NavLink>
                  <NavLink 
                    to="/ourproducts/fresenius-kabi" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Fresenius Kabi
                  </NavLink>
                  <NavLink 
                    to="/ourproducts/download" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Download Product
                  </NavLink>
                </div>
              )}
            </div>

            {/* Download Product Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDownloadDropdown(true)}
              onMouseLeave={() => setDownloadDropdown(false)}
            >
              <span style={linkStyle}>
                Download Product ▾
              </span>
              {downloadDropdown && (
                <div style={dropdownStyle}>
                  <NavLink 
                    to="/download/patient-monitors" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Patient Monitors
                  </NavLink>
                  <NavLink 
                    to="/download/capnography" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Capnography
                  </NavLink>
                  <NavLink 
                    to="/download/defibrillator" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Defibrillator
                  </NavLink>
                  <NavLink 
                    to="/download/aed" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    AED
                  </NavLink>
                  <NavLink 
                    to="/download/cpr" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    CPR
                  </NavLink>
                  <NavLink 
                    to="/download/ecg" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    ECG
                  </NavLink>
                  <NavLink 
                    to="/download/neurology" 
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Neurology
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/gallery" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}>
              Gallery
            </NavLink>

            <NavLink to="/contactus" style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}>
              Contact
            </NavLink>
          </div>

          {/* Hamburger Icon */}
          <div 
            style={hamburgerStyle} 
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div style={hamburgerLineStyle}></div>
            <div style={hamburgerLineStyle}></div>
            <div style={hamburgerLineStyle}></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle(mobileMenuOpen)} className="mobile-menu">
          <NavLink 
            to="/" 
            end 
            style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* Mobile About Us */}
          <div>
            <div 
              style={{ ...linkStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About Us
              <span style={{ transform: mobileAboutOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▾</span>
            </div>
            {mobileAboutOpen && (
              <div style={mobileDropdownStyle}>
                <NavLink 
                  to="/aboutus" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink 
                  to="/aboutus/vision-mission" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vision & Mission
                </NavLink>
                <NavLink 
                  to="/aboutus/team" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Our Products */}
          <div>
            <div 
              style={{ ...linkStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Our Products
              <span style={{ transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▾</span>
            </div>
            {mobileProductsOpen && (
              <div style={mobileDropdownStyle}>
                <NavLink 
                  to="/ourproducts/getinge" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Getinge
                </NavLink>
                <NavLink 
                  to="/ourproducts/nihon-koden" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nihon Koden
                </NavLink>
                <NavLink 
                  to="/ourproducts/kls-martin" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  KLS MARTIN
                </NavLink>
                <NavLink 
                  to="/ourproducts/fresenius-kabi" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fresenius Kabi
                </NavLink>
                <NavLink 
                  to="/ourproducts/download" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Product
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Download Product */}
          <div>
            <div 
              style={{ ...linkStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onClick={() => setMobileDownloadOpen(!mobileDownloadOpen)}
            >
              Download Product
              <span style={{ transform: mobileDownloadOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▾</span>
            </div>
            {mobileDownloadOpen && (
              <div style={mobileDropdownStyle}>
                <NavLink 
                  to="/download/patient-monitors" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patient Monitors
                </NavLink>
                <NavLink 
                  to="/download/capnography" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Capnography
                </NavLink>
                <NavLink 
                  to="/download/defibrillator" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Defibrillator
                </NavLink>
                <NavLink 
                  to="/download/aed" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AED
                </NavLink>
                <NavLink 
                  to="/download/cpr" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CPR
                </NavLink>
                <NavLink 
                  to="/download/ecg" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ECG
                </NavLink>
                <NavLink 
                  to="/download/neurology" 
                  style={dropdownItemStyle}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Neurology
                </NavLink>
              </div>
            )}
          </div>

          <NavLink 
            to="/gallery" 
            style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink 
            to="/contactus" 
            style={({ isActive }: { isActive: boolean }) => (isActive ? activeLinkStyle : linkStyle)}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;