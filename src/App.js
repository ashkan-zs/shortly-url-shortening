import Button from "./components/UI/Button";

import './App.css';

import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as HeroImg } from "./assets/illustration-working.svg";
import { ReactComponent as RecognitionIcon } from "./assets/icon-brand-recognition.svg";
import { ReactComponent as CustomizableIcon } from "./assets/icon-fully-customizable.svg";
import { ReactComponent as RecordIcon } from "./assets/icon-detailed-records.svg";
import { ReactComponent as InstagramIcon} from "./assets/icon-instagram.svg";
import { ReactComponent as FacebookIcon} from "./assets/icon-facebook.svg";
import { ReactComponent as PinterestIcon} from "./assets/icon-pinterest.svg";
import { ReactComponent as TwitterIcon} from "./assets/icon-twitter.svg";

function App() {
  return (
    <main className="container mx-auto overflow-x-hidden">
      <header className="flex items-center justify-between p-5">
        <Logo className="fill-[#34313D]" />
        <nav>
          <ul className="hidden md:flex items-center">
            <li>
              <button>Features</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Resources</button>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center">
          Login
          <Button type="sm" title="Sign Up" />
        </div>
        <div className="burger-icon md:hidden">
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center">
        <HeroImg className="w-full ml-6" />
        <article className="text-center mt-5">
          <h1 className="text-5xl font-bold leading-tight m-4 text-neutral-very-dark-blue">
            More than just shorter links
          </h1>
          <p className="text-2xl px-6 text-neutral-grayish-violet">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </article>
        <Button type="normal" title="Get Started" className="my-7" />
        <form className="flex flex-col w-4/5 bg-primary-dark-violet bg-mobile-form bg-no-repeat bg-right-top p-6 rounded-xl space-y-4 -mb-20 mt-12">
          <input
            className="rounded-md p-3 w-full"
            type="text"
            placeholder="Shorten a link here..."
          />
          <Button className="rounded-md py-3 font-bold" title="Shorten It!" />
        </form>
      </section>

      <section className="bg-gray-100 text-center py-10 pt-44">
        <article>
          <h2 className="text-4xl font-bold text-neutral-very-dark-blue">
            Advanced Statistics
          </h2>
          <p className="text-neutral-grayish-violet">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </article>

        <div>
          <article className="feature-card bg-white p-12 m-7 my-24 pt-18 rounded-md relative">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <RecognitionIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5">
              Brand Recognition
            </h3>
            <p className="text-neutral-grayish-violet">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className="feature-card bg-white p-12 m-7 my-24 pt-18 rounded-md relative">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <RecordIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5">
              Detailed Records
            </h3>
            <p className="text-neutral-grayish-violet">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="feature-card bg-white p-12 m-7 my-24 pt-18 rounded-md relative">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CustomizableIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5">
              Fully Customizable
            </h3>
            <p className="text-neutral-grayish-violet">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-primary-dark-violet bg-mobile-boost bg-no-repeat bg-cover bg-right flex flex-col items-center py-24">
        <h2 className="text-3xl text-white mb-5 font-bold">
          Boost your links today
        </h2>
        <Button type="normal" title="Get Started" className="font-bold" />
      </section>

      <footer className="bg-neutral-very-dark-violet text-white flex flex-col items-center text-center pt-6">
        <Logo className="m-8 fill-white" />
        <div>
          <h3 className="font-bold py-4">Features</h3>
          <ul className="text-neutral-grayish-violet space-y-2 pb-4">
            <li>
              <button>Link Shortening</button>
            </li>
            <li>
              <button>Branded Links</button>
            </li>
            <li>
              <button>Analytics</button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold py-4">Resources</h3>
          <ul className="text-neutral-grayish-violet space-y-2 pb-4">
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Developers</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold py-4">Company</h3>
          <ul className="text-neutral-grayish-violet space-y-2 pb-4">
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Our Team</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
          <div className="flex space-x-7 my-7">
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
        </div>

        <div class="attribution my-4">
          Challenge by Frontend Mentor. Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </main>
  );
}

export default App;
