
function App() {
  return (
    <main>
      <header>
        <div></div>
        {/* Logo */}
        <nav>
          <ul>
            <li><button>Features</button></li>
            <li><button>Pricing</button></li>
            <li><button>Resources</button></li>
          </ul>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section>
        <div></div> {/* Hero Image */} 
        <article>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </article>
        <button>Get Started</button>
        <form>
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten It!</button>
        </form>
      </section>

      <section>
        <article>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </article>

        <article>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>

        <article>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </section>

      <section>Boost your links today Get Started</section>

      <footer>
        <div>
          <h3>Features</h3>
          <ul>
            <li><button>Link Shortening</button></li>
            <li><button>Branded Links</button></li>
            <li><button>Analytics</button></li>
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul>
            <li><button>Blog</button></li>
            <li><button>Developers</button></li>
            <li><button>Support</button></li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li><button>About</button></li>
            <li><button>Our Team</button></li>
            <li><button>Careers</button></li>
            <li><button>Contact</button></li>
          </ul>
        </div>

        <div class="attribution">
          Challenge by Frontend Mentor. Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </main>
  );
}

export default App;
