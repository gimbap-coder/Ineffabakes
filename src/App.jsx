import "./App.css";

const preorderForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDIhBHI8UuWDk6jCgkjHL_zjA4P9nclbbka58foE5ivD5R3A/viewform?usp=dialog";

const instagram = "https://www.instagram.com/ineffabakes";

function App() {
  return (
    <main>
      <div className="announcement">
        🍪 Fresh This Week • <div className="announcement">
  <div className="announcement">
  🍪 THIS WEEK'S COOKIE DROP IS LIVE • Reserve your box before they're gone!
</div>
</div>
      </div>

      <header className="site-header">
        <img src="/logo.png" className="logo" alt="Ineffabakes Logo" />

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#flavors">Fresh This Week</a>
          <a href="#order">Weekly Drop</a>
          <a href="#promise">The Promise</a>
          <a href="#gallery">From the Oven</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="location">✦ Small Batch • Arizona ✦</p>

          <h1>Cookies worth waiting for.</h1>

          <p className="tagline">
            Handcrafted cookies made in small batches with cozy flavors, golden
            edges, and soft centers.
          </p>

          <div className="buttons">
            <a
              className="primary-button"
              href={preorderForm}
              target="_blank"
              rel="noreferrer"
            >
              Reserve Your Box
            </a>

            <a href={instagram} target="_blank" rel="noreferrer">
              View Instagram
            </a>
          </div>

          <div className="hero-badge">
            <span>✦ Small Batch</span>
            <span>✦ Fresh Every Saturday</span>
            <span>✦ Premium Ingredients</span>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img
            src="/hero.jpg"
            className="hero-image"
            alt="Ineffabakes cookies"
          />
        </div>
      </section>

      <section className="flavors" id="flavors">
        <p className="section-label">❋ ✦ 🍪 ✦ ❋</p>
        <h2>Fresh This Week</h2>
        <p className="section-subtitle">
          Freshly baked every week. Available until sold out.
        </p>

        <div className="flavor-grid">
          <div className="flavor-card">
            <h3>🍪 Brown Butter Chocolate Chunk</h3>
            <p>
              Rich brown butter cookie with pools of premium chocolate and a
              sprinkle of flaky sea salt.
            </p>
            <p className="price">$4 each</p>
            <a
              className="primary-button card-button"
              href={preorderForm}
              target="_blank"
              rel="noreferrer"
            >
              Reserve This Flavor
            </a>
          </div>

          <div className="flavor-card">
            <h3>🫐 Blueberry Lemon</h3>
            <p>
              Soft lemon cookie bursting with sweet blueberries and bright
              citrus flavor.
            </p>
            <p className="price">$4 each</p>
            <a
              className="primary-button card-button"
              href={preorderForm}
              target="_blank"
              rel="noreferrer"
            >
              Reserve This Flavor
            </a>
          </div>

          <div className="flavor-card">
            <h3>🥛 Cookies & Cream</h3>
            <p>
              Soft vanilla cookie loaded with crunchy chocolate cookie pieces.
            </p>
            <p className="price">$4 each</p>
            <a
              className="primary-button card-button"
              href={preorderForm}
              target="_blank"
              rel="noreferrer"
            >
              Reserve This Flavor
            </a>
          </div>
        </div>
      </section>

      <section className="preorder" id="order">
        <p className="section-label">✦ Weekly Drop ✦</p>
        <h2>The Weekly Drop</h2>
        <p className="section-subtitle">
          Freshly baked every weekend. Limited quantities until sold out.
        </p>

        <div className="preorder-grid">
          <div className="preorder-card">
            <span>🟢</span>
            <h3>PREORDERS OPEN</h3>
            <p>Monday • 6:00 PM</p>
          </div>

          <div className="preorder-card">
            <span>🔒</span>
            <h3>PREORDERS CLOSE</h3>
            <p>Wednesday • 10:00 PM</p>
          </div>

          <div className="preorder-card">
            <span>🥣</span>
            <h3>DOUGH DAY</h3>
            <p>Thursday evening</p>
          </div>

          <div className="preorder-card">
            <span>🔥</span>
            <h3>BAKE NIGHT</h3>
            <p>Friday • 6:00–10:00 PM</p>
          </div>
        </div>

        <a
          className="primary-button"
          href={preorderForm}
          target="_blank"
          rel="noreferrer"
        >
          Reserve Your Box
        </a>

        <p className="pickup-note">
          Pickup opens Saturday morning. Every box is baked fresh and made with
          care.
        </p>
      </section>

      <section className="promise" id="promise">
        <p className="section-label">✦ The Promise ✦</p>
        <h2>Why Ineffabakes?</h2>
        <p className="promise-subtitle">
          Thoughtful cookies made fresh in small batches.
        </p>

        <div className="promise-grid">
          <div className="promise-card">
            <span>🌾</span>
            <h3>Quality Ingredients</h3>
            <p>Made with care using ingredients chosen for flavor.</p>
          </div>

          <div className="promise-card">
            <span>🤎</span>
            <h3>Brown Butter</h3>
            <p>Warm, nutty flavor that makes every cookie feel special.</p>
          </div>

          <div className="promise-card">
            <span>🍪</span>
            <h3>Small Batch</h3>
            <p>Limited weekly drops so every cookie gets attention.</p>
          </div>

          <div className="promise-card">
            <span>📍</span>
            <h3>Arizona Pickup</h3>
            <p>Local pickup in Surprise, Arizona.</p>
          </div>
        </div>
      </section>

      <section className="featured-cookie">
        <div className="featured-text">
          <p className="section-label">✦ Signature Cookie ✦</p>
          <h2>Brown Butter Chocolate Chunk</h2>
          <p>
            The cookie that started Ineffabakes. Rich brown butter, premium
            chocolate, golden edges, and a soft gooey center.
          </p>

          <a
            className="primary-button"
            href={preorderForm}
            target="_blank"
            rel="noreferrer"
          >
            Reserve Your Box
          </a>
        </div>

        <img
          src="/pullapart.jpg"
          alt="Brown Butter Chocolate Chunk pull apart cookie"
        />
      </section>

      <section className="gallery" id="gallery">
        <p className="section-label">✦ From the Oven ✦</p>
        <h2>From the Oven</h2>
        <p className="section-subtitle">
          Freshly baked moments from Ineffabakes.
        </p>

        <div className="gallery-grid">
          <img src="/pullapart.jpg" alt="Gooey pull apart cookie" />
          <img src="/chocolate.jpg" alt="Chocolate chunk cookie" />
          <img src="/blueberry.jpg" alt="Blueberry lemon cookie" />
          <img src="/cookiescream.jpg" alt="Cookies and cream cookie" />
          <img src="/hero.jpg" alt="Styled cookie platter" />
        </div>
      </section>

      <footer className="footer">
        <img src="/logo.png" className="footer-logo" alt="Ineffabakes Logo" />

        <h3>Ineffabakes</h3>

        <p className="footer-tagline">
          Small batches. Big moments.
        </p>

        <div className="footer-links">
          <a href="#flavors">This Week's Menu</a>

          <a href={preorderForm} target="_blank" rel="noreferrer">
            Reserve Your Box
          </a>

          <a href={instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <p className="footer-location">📍 Surprise, Arizona</p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ineffabakes • Made with 🤎
        </p>
      </footer>
    </main>
  );
}

export default App;