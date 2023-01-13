import { useState } from "react";
import Button from "../UI/Button";
import ShortLink from "./ShortLink";

const ShortLinkForm = () => {
  const [linkURL, setLinkURL] = useState();
  const [invalid, setInvalid] = useState(false);
  const [shortLinks, setShortLinks] = useState([]);

  const isUrlValid = (str) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return pattern.test(str);
  };

  const getShortURL = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkURL}`, {
      method: "POST",
    });

    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();

    setShortLinks((prev) => [...prev, data.result.code]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isUrlValid(linkURL)) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    getShortURL();

    setLinkURL("");
  };

  const handleInputChange = (event) => {
    setLinkURL(event.target.value);
  };

  const inputClasses = invalid
    ? "rounded-md p-3 flex-1 md:text-sm md:pl-6 border-2 border-red-600 placeholder-red-400"
    : "rounded-md p-3 flex-1 md:text-sm md:pl-6";
  return (
    <div className="container flex flex-col items-center relative -top-16">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col w-4/5 bg-primary-dark-violet bg-mobile-form bg-no-repeat bg-right-top p-6 rounded-xl space-y-4 mb-6 md:space-y-0 md:gap-1 md:p-10 md:bg-desktop-form"
      >
        <div className="flex flex-1 md:gap-6">
          <input
            onChange={handleInputChange}
            className={inputClasses}
            type="text"
            placeholder="Shorten a link here..."
            value={linkURL}
          />
          <Button
            className="rounded-md py-3 font-bold md:py-4 md:px-8 md:text-sm"
            title="Shorten It!"
          />
        </div>
        {invalid && <p className="text-xs text-red-400">Please add a link</p>}
      </form>
      <ShortLink />
      <ShortLink />
      <ShortLink />
    </div>
  );
};

export default ShortLinkForm;
