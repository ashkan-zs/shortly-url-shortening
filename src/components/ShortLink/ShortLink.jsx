import React from "react";
import Button from "../UI/Button";

const ShortLink = () => {
  return (
    <div className="flex items-center justify-between w-4/5 bg-white p-4 rounded-md shadow-sm my-2">
      <a href="" className="text-neutral-very-dark-violet text-sm">
        google.com/links/something
      </a>
      <div>
        <a href="" className="text-sm text-primary-cyan">shortlink.de/safda</a>
        <Button className='text-xs rounded-md px-4 py-2 ml-2' title="Copy" />
      </div>
    </div>
  );
};

export default ShortLink;
