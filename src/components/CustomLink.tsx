import React from "react";

interface CustomLinkProps {
  link: string;
  children?: React.ReactNode;
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg ml-2"
    >
      <span
        className="hover:transitions-color text-sky-500 bg-left-bottom bg-gradient-to-r
        from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]
        transition-all duration-500 ease-out">
          {props.children}
      </span>
    </a>
  );
};

export default CustomLink;