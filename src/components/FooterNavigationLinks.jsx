import Link from "next/link";

const FooterNavigationLink = ({ href, text, closeMenu, className }) => {
  return (
    <Link href={href} onClick={closeMenu} className={`relative group ${className}`}>
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white_color transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default FooterNavigationLink;
