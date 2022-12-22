import React from "react";

const Button = ({ title, type = "none", className }) => {
  let additionalClasses = "";

  if (type === "sm") 
    additionalClasses = "rounded-full text-sm  py-2 px-5";
  if (type === "normal")
    additionalClasses = "rounded-full py-4 px-12 text-xl text-bold";

  const classes = `bg-primary-cyan text-white ${className} ${additionalClasses}`;
  return <button className={classes}>{title}</button>;
};

export default Button;