import Button from "./components/UI/Button";

import "./App.css";

import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as HeroImg } from "./assets/illustration-working.svg";
import { ReactComponent as RecognitionIcon } from "./assets/icon-brand-recognition.svg";
import { ReactComponent as CustomizableIcon } from "./assets/icon-fully-customizable.svg";
import { ReactComponent as RecordIcon } from "./assets/icon-detailed-records.svg";
import { ReactComponent as InstagramIcon } from "./assets/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "./assets/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "./assets/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "./assets/icon-twitter.svg";
import ShortLinkForm from "./components/ShortLink/ShortLinkForm";

function App() {
  return (
    <main className="overflow-x-hidden">
      <header className="container mx-auto flex items-center gap-8 justify-between p-5">
        <Logo className="fill-[#34313D]" />
        <nav className="flex-1">
          <ul className="hidden space-x-6 text-neutral-gray text-sm font-bold md:flex">
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
        <div className="hidden items-center font-bold md:flex gap-6">
          <a className="text-sm text-neutral-gray">Login</a>
          <Button type="sm" title="Sign Up" />
        </div>
        <div className="burger-icon md:hidden">
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
          <div className="line w-6 h-1 bg-neutral-gray m-1"></div>
        </div>
      </header>

      <section className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center md:flex-row-reverse md:mt-8 md:p-5">
          <HeroImg className="w-full -mr-16" />
          <div className="flex flex-col items-center md:items-start">
            <article className="text-center mt-5 md:text-start md:mr-3">
              <h1 className="text-5xl font-bold leading-tight m-4 text-neutral-very-dark-blue md:ml-0 md:text-6xl md:leading-[1.1]">
                More than just shorter links
              </h1>
              <p className="text-2xl px-6 text-neutral-grayish-violet md:p-0 md:text-lg">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
            </article>
            <Button type="normal" title="Get Started" className="my-7" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-100 text-center pb-10 mt-20">
        <ShortLinkForm />
        <article className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold text-neutral-very-dark-blue md:text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-neutral-grayish-violet md:text-sm md:mt-3 md:w-1/3 md:leading-normal">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </article>

        <div className="container mx-auto flex flex-col items-center gap-10 mt-10 md:flex-row md:min-h-[400px]">
          <article className="feature-card bg-white p-12 m-7 pt-18 flex flex-col rounded-md relative md:items-start md:self-start">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/4">
              <RecognitionIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5 md:text-xl">
              Brand Recognition
            </h3>
            <p className="text-neutral-grayish-violet md:text-sm md:text-start">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className="feature-card bg-white p-12 m-7 pt-18 flex flex-col rounded-md relative md:items-start">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/4">
              <RecordIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5 md:text-xl">
              Detailed Records
            </h3>
            <p className="text-neutral-grayish-violet md:text-sm md:text-start">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="feature-card bg-white p-12 m-7 pt-18 flex flex-col rounded-md relative md:items-start md:self-end">
            <div className="flex items-center justify-center bg-primary-dark-violet rounded-full w-20 h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/4">
              <CustomizableIcon />
            </div>
            <h3 className="text-3xl font-bold text-neutral-very-dark-blue my-5 md:text-xl">
              Fully Customizable
            </h3>
            <p className="text-neutral-grayish-violet md:text-sm md:text-start">
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

      <footer className="bg-neutral-very-dark-violet text-white text-center pt-6">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start md:text-start md:justify-between">
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
          </div>
          <div className="flex space-x-7 my-7">
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="attribution py-4">
          Challenge by Frontend Mentor. Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </main>
  );
}

export default App;
