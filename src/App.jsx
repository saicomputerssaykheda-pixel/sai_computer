export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <h1>Sai Computer</h1>
          <p>Reliable PCs, fast repairs, and custom builds near you.</p>
        </div>
        <a className="cta-button" href="#contact">Book Now</a>
      </header>

      <main>
        <section className="hero">
          <div>
            <h2>Best Computer Shop for Sales & Repair</h2>
            <p>
              We sell laptops, desktops, gaming rigs, and accessories. Fast service for
              repair, upgrade, and custom build requests.
            </p>
            <div className="hero-actions">
              <a href="#services" className="button">Our Services</a>
              <a href="#contact" className="button secondary">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="services" className="section-card">
          <h3>Our Services</h3>
          <div className="feature-grid">
            <article>
              <h4>Computer Sales</h4>
              <p>New and refurbished desktop PCs, laptops, monitors, and accessories.</p>
            </article>
            <article>
              <h4>Repairs & Upgrades</h4>
              <p>Hardware repair, virus removal, software setup, and performance upgrades.</p>
            </article>
            <article>
              <h4>Custom Builds</h4>
              <p>Custom gaming PCs and workstations built to your budget and needs.</p>
            </article>
          </div>
        </section>

        <section className="section-card about-card">
          <h3>Why Choose Us?</h3>
          <p>
            Friendly service, honest pricing, and expert support for all computer needs.
            We help local customers with fast turnaround and quality parts.
          </p>
        </section>

        <section id="contact" className="section-card contact-card">
          <h3>Contact Information</h3>
          <p>Visit our shop or send a message to get a free consultation.</p>
          <ul>
            <li><strong>Location:</strong> Your local computer shop address</li>
            <li><strong>Phone:</strong> 123-456-7890</li>
            <li><strong>Email:</strong> info@computershop.com</li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Computer Shop. Built with React.</p>
      </footer>
    </div>
  )
}
