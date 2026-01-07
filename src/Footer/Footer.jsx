import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top Section */}
      <div style={styles.topSection}>
        {/* Logo */}
        <div style={styles.logoSection}>
          <h2 style={styles.logo}>Logo</h2>
          <p style={styles.tagline}>Book tickets instantly</p>
        </div>

        {/* Links */}
        <div style={styles.linksSection}>
          <div>
            <h4 style={styles.heading}>Company</h4>
            <ul style={styles.list}>
              <li>Terms & Conditions</li>
              <li>Rules</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 style={styles.heading}>Business</h4>
            <ul style={styles.list}>
              <li>List Your Events</li>
              <li>Partner With Us</li>
            </ul>
          </div>

          <div>
            <h4 style={styles.heading}>Support</h4>
            <ul style={styles.list}>
              <li>Contact Us</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socials}>
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Logo · Cookies · Privacy Policy
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    padding: "40px 60px 15px",
    fontFamily: "Arial, sans-serif",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },
  logoSection: {
    maxWidth: "220px",
  },
  logo: {
    fontSize: "28px",
    marginBottom: "8px",
  },
  tagline: {
    fontSize: "14px",
    color: "#9ca3af",
  },
  linksSection: {
    display: "flex",
    gap: "40px",
  },
  heading: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    fontSize: "14px",
    color: "#cbd5f5",
    cursor: "pointer",
  },
  socials: {
    display: "flex",
    gap: "12px",
    fontSize: "20px",
    cursor: "pointer",
  },
  bottom: {
    marginTop: "30px",
    paddingTop: "10px",
    borderTop: "1px solid #1e293b",
    fontSize: "12px",
    textAlign: "center",
    color: "#9ca3af",
  },
};

export default Footer;
