import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";

const NavBar = () => {
  return (
    <nav className="flex-between navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={145} height={43} alt="flexibble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <li href={link.href} key={link.key}>
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
