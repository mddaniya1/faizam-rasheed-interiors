import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setState("error");
    setState("idle");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Join Faizam Rasheed Interiors updates")}&body=${encodeURIComponent(`Please add ${email.trim()} to your updates list.`)}`;
  };

  return (
    <footer className="terion-footer text-ink-foreground">
      <div className="footer-invitation flex flex-col items-center justify-end text-center">
        <h2 className="footer-invitation-title">Let's Design Your<br /><em>Dream Space.</em></h2>
        <Link to="/contact" className="footer-invitation-link group">
          Get Started Now <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Column 1: Company & Contact */}
            <div className="footer-column-section">
              <Link to="/" className="footer-brand" aria-label="Faizam Rasheed home">
                <span>Faizam Rasheed<span className="footer-brand-period">.</span></span>
              </Link>
              <address className="not-italic footer-contact-info">
                <div className="footer-info-item">
                  <p className="footer-label">Address</p>
                  <p className="footer-info-value">{company.city}, {company.country}</p>
                </div>
                <div className="footer-info-item">
                  <p className="footer-label">Phone</p>
                  <a className="footer-info-value footer-hover" href={company.whatsapp}>{company.phone}</a>
                </div>
                <div className="footer-info-item">
                  <p className="footer-label">Email</p>
                  <a className="footer-info-value footer-hover" href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </address>
            </div>

            {/* Column 2: Main Pages */}
            <FooterCol title="Main Pages">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/" hash="service">Services</Link>
              <Link to="/portfolios">Portfolios</Link>
              <Link to="/contact">Contact Us</Link>
            </FooterCol>

            {/* Column 3: Services & Blog */}
            <FooterCol title="Services & Blog">
              <Link to="/services/$slug" params={{ slug: "interior-design" }}>Complete Interior Design</Link>
              <Link to="/services/$slug" params={{ slug: "architecture" }}>Architecture</Link>
              <Link to="/blog">Blog</Link>
            </FooterCol>

            {/* Column 4: Connect & Newsletter */}
            <div className="footer-column-section">
              <h3 className="footer-label">Connect</h3>
              <div className="footer-social-links">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="footer-social-link">WhatsApp</a>
                <span className="footer-social-divider">|</span>
                <a href={company.facebook} target="_blank" rel="noreferrer" className="footer-social-link">Facebook</a>
                <span className="footer-social-divider">|</span>
                <a href={company.instagram} target="_blank" rel="noreferrer" className="footer-social-link">Instagram</a>
                <span className="footer-social-divider">|</span>
                <a href={company.tiktok} target="_blank" rel="noreferrer" className="footer-social-link">TikTok</a>
              </div>

              <form onSubmit={submit} noValidate className="footer-newsletter">
                <label htmlFor="footer-email" className="footer-label">Enter Your Email</label>
                <div className="footer-email-wrap">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
                    placeholder="hello@gmail.com"
                    aria-invalid={state === "error"}
                  />
                  <Button type="submit" className="footer-submit">
                    Join Us
                    <ArrowRight aria-hidden="true" size={20} strokeWidth={1.7} />
                  </Button>
                </div>
                <p className="footer-status" role="status">
                  {state === "error" && "Please enter a valid email address."}
                </p>
              </form>
            </div>
          </div>

          <div className="footer-legal">
            <p>© 2026 Copyright - Faizam Rasheed Interiors | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="footer-column">
      <h3 className="footer-label">{title}</h3>
      <div className="footer-column-links">{children}</div>
    </div>
  );
}
